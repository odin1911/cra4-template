declare module '*.png';
declare module '*.jpg';
declare module '*.less';
declare module '*.scss';
declare module '*.svg';
declare module '*.svg?url';

// nodejs environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | undefined;
    // 部署环境
    DEPLOY_ENV: 'BETA' | 'STAGING' | 'PRODUCTION';
    REACT_APP_INDEPENDENT?: string;
    REACT_APP_TOP_HOST: string;
  }
}
