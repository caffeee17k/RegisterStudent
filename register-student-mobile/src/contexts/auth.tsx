import React, { createContext, useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import * as auth from '../services/auth';
import { LoginProps, AuthContextData, IUser } from './types';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@RSAuth:user');
      const storageToken = await AsyncStorage.getItem('@RSAuth:token');

      // await new Promise(resolve => setTimeout(resolve, 2000))

      if (storageUser && storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;

        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
    }
    loadStorageData();
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  async function signIn(data: LoginProps) {
    const response = await auth.LoginApp();

    if (data.email !== response.user.email || data.email === '' || !data.email) {
      Alert.alert('Aviso', 'Email ou senha incorretos. Favor digite novamente.');
    } else if (data.password !== response.user.password || data.password === '' || !data.password) {
      Alert.alert('Aviso', 'Email ou senha incorretos. Favor digite novamente.');
    } else {
      setUser(response.user);

      api.defaults.headers.Authorization = `Bearer ${response.token}`;

      await AsyncStorage.setItem('@RSAuth:user', JSON.stringify(response.user));
      await AsyncStorage.setItem('@RSAuth:token', response.token);
    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used whitin an AuthProvider");

  return context;
}