import redis from 'redis';

const createRedisClient = (port: any) => {
    const redisClient = redis.createClient(port);
    return redisClient;
};

const redisClient = (req, res, next) => {
    const REDIS_PORT: any = process.env.port || 6379;
    const client = createRedisClient(REDIS_PORT);
    req.redisClient = client;
    next();
};

export default redisClient;
