export const configuration = () => ({
  environment: process.env.NODE_ENV,
  server: {
    port: parseInt(process.env.SERVER_PORT, 10),
  },
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    synchronize: process.env.NODE_ENV === 'development',
  },
});
