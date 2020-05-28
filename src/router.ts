import express from 'express';

import controller from './controllers';

const scraperController = controller.scraper;
const datawrapperController = controller.datawrapper;

const apiRouter = express.Router();

const wrapAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

apiRouter.get('/', (req, res) => {
    res.redirect('https://documenter.getpostman.com/view/4669153/SzmY81T7');
});

/* public routes */
// scraper
apiRouter.get('/scraper/county-numbers', wrapAsync(scraperController.listCountyNumbers));
apiRouter.get('/scraper/state-cases', wrapAsync(scraperController.listStateCases));
apiRouter.get('/scraper/state-deaths', wrapAsync(scraperController.listStateDeaths));

// datawrapper
apiRouter.get('/datawrapper/me', wrapAsync(datawrapperController.me));
apiRouter.get('/datawrapper/charts', wrapAsync(datawrapperController.listCharts));
apiRouter.get('/datawrapper/chart/:id', wrapAsync(datawrapperController.showChart));
apiRouter.get('/datawrapper/chart/:id/data', wrapAsync(datawrapperController.showChartData));
apiRouter.post('/datawrapper/chart/:id/data', wrapAsync(datawrapperController.updateChartData));

export default apiRouter;
