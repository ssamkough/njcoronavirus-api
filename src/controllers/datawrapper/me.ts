import axios from 'axios';

const me = async (req, res, next) => {
    const redisClient = req.redisClient;
    const url: string = 'https://api.datawrapper.de/v3/me';

    const user = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${process.env.DATAWRAPPER_API}`,
        },
    });

    const userData: string = JSON.stringify(user.data);
    redisClient.setex(req.url, 3600, userData);

    res.json(render(user.data));
};

const render = (user) => {
    return {
        status: 1000,
        data: user,
    };
};

export default me;
