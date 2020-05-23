import redis from 'redis';

const redisClient = (req, res, next) => {
    const client = redis.createClient(); // by default will use 127.0.0.1 and 6379 as the hostname and port respectively
    req.redisClient = client;
    next();
};

export default redisClient;
