interface Response {
  token: string;
  user: {
    name: string;
    email: string;
    password: string;
  }
}

export function LoginApp(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI1MDUzNjA2LCJleHAiOjE2Mjc2NDU2MDZ9.aaYqO2AH83kXsNb9HpCizDsuiFv2i8PBAkBRX-vCQXs',
        user: {
          name: 'Mr Robat',
          email: 'mrrobat@cfisp.com',
          password: 'admin',
        }
      })
    }, 1500)
  });
}