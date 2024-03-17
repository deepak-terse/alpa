interface Config {
    HOST: string,
    PORT: number;
    REDIS_HOST: string;
    REDIS_PORT: number;
}

const config: Config = {
    HOST: process.env.HOST || '0.0.0.0',
    PORT: parseInt(process.env.PORT || '3002', 10),
    REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
    REDIS_PORT: parseInt(process.env.REDIS_PORT || '6379', 10)
};

export default config;
