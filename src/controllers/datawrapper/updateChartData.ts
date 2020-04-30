import axios from 'axios';

const updateChartData = async (req, res, next) => {
    const id = req.params.id;
    const chartData = req.body.data;
    const url: string = `https://api.datawrapper.de/v3/charts/${id}/data`;

    const chart = await axios.put(url, {
        headers: {
            Authorization: `Bearer ${process.env.DATAWRAPPER_API}`,
        },
        data: {
            chartData,
        },
    });

    res.json(render(chart.data));
};

const render = (chart) => {
    return {
        status: 1000,
        data: chart,
    };
};
export default updateChartData;
