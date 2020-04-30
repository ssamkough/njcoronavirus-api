import axios from 'axios';

const listCharts = async (req, res, next) => {
    const url: string = 'https://api.datawrapper.de/v3/charts';

    const charts = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${process.env.DATAWRAPPER_API}`,
        },
    });

    res.json(render(charts.data));
};

const render = (charts) => {
    return {
        status: 1000,
        data: charts,
    };
};
export default listCharts;
