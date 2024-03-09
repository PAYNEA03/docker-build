// custom.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    BACKEND_URL: string;
    REACT_APP_API_URL: string;
    // Add more variables as needed
  }
}