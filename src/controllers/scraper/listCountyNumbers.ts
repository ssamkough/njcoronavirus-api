const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

const listCountyNumbers = async (req, res, next) => {
    let countyObjects = [];
    puppeteer.use(StealthPlugin());

    await puppeteer.launch({ headless: true }).then(async (browser) => {
        console.log('Running tests..');
        const page = await browser.newPage();
        const covidUrl = 'https://maps.arcgis.com/apps/opsdashboard/index.html#/ec4bffd48f7e495182226eee7962b422';

        await page.goto(covidUrl);
        await page.waitFor(1000);

        let emberId = 203;

        while (emberId <= 243) {
            let countyObj = {};
            let xpath = `//*[@id="ember${emberId}"]/div/div/p[1]/strong`;
            let [town] = await page.$x(xpath);
            let townTxt = await town.getProperty('textContent');
            let townRawTxt = await townTxt.jsonValue();

            xpath = `//*[@id="ember${emberId}"]/div/div/p[2]/span/span/strong`;
            let [number] = await page.$x(xpath);
            let numberTxt = await number.getProperty('textContent');
            let numberRawTxt = await numberTxt.jsonValue();

            console.log(townRawTxt, ': ', numberRawTxt);

            countyObj[townRawTxt] = numberRawTxt;
            countyObjects.push(countyObj);

            emberId = emberId + 2;
        }

        await browser.close();
        console.log(`All done ✨`);
    });

    res.json(render(countyObjects));
};

const render = (countyObjects) => {
    return {
        status: 1000,
        data: countyObjects,
    };
};

export default listCountyNumbers;
