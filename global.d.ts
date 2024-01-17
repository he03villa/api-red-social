export namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: string;
      DATABASE_URL: string;
    }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: string;
      DATABASE_URL: string;
    }
  }

  namespace Express {
    interface Request {
      user?: any;
      code?: number
    }
  }
}