import axios from 'axios';

const listCharts = async (req, res, next) => {
    const redisClient = req.redisClient;
    const url: string = 'https://api.datawrapper.de/v3/charts';

    const charts = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${process.env.DATAWRAPPER_API}`,
        },
    });

    const chartData: string = JSON.stringify(charts.data);
    redisClient.setex(req.url, 3600, chartData);

    res.json(render(charts.data));
};

const render = (charts) => {
    return {
        status: 1000,
        data: charts,
    };
};
export default listCharts;
