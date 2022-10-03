/* eslint-disable prettier/prettier */
export interface ApiConfig {
  accountUrl: string;
  user: string;
  password: string;
}



export interface AppConfig {
  nodeEnv: string;
  api: ApiConfig;
}

const config = (): AppConfig => {  
  return {
    nodeEnv: process.env.NODE_ENV,
    api: {
      accountUrl: process.env.API_ACCOUNT_URL,
      user: process.env.API_ACCOUNT_LOGIN,
      password: process.env.API_ACCOUNT_PASSWORD
    },      
  };
}

export default config;
