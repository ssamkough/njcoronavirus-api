import render from './../render';

const cache = (req, res, next) => {
    const redisClient = req.redisClient;
    const requestUrl = req.url;

    redisClient.get(requestUrl, (err, data) => {
        if (err) {
            throw err;
        }

        if (data !== null) {
            return res.json(render(data, true));
        } else {
            next();
        }
    });
};

export default cache;
