const listStateDeaths = async (req, res, next) => {
    let stateDeathCount = {};
    //*[@id="ember214"]/svg/g[2]/svg/text
    res.json(render(stateDeathCount));
};

const render = (stateDeathCount) => {
    return {
        status: 1000,
        data: stateDeathCount,
    };
};

export default listStateDeaths;
