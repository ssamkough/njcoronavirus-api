import axios from 'axios';

const showChartData = async (req, res, next) => {
    const id = req.params.id;
    const url: string = `https://api.datawrapper.de/v3/charts/${id}/data`;

    const chart = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${process.env.DATAWRAPPER_API}`,
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
export default showChartData;
