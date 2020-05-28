const listStateCases = async (req, res, next) => {
    let stateTotalCases = {};
    //*[@id="ember216"]/svg/g[2]/svg/text
    res.json(render(stateTotalCases));
};

const render = (stateTotalCases) => {
    return {
        status: 1000,
        data: stateTotalCases,
    };
};

export default listStateCases;
