import datawrapperMe from './datawrapper/me';
import datawrapperListCharts from './datawrapper/listCharts';
import datawrapperShowChart from './datawrapper/showChart';
import datawrapperShowChartData from './datawrapper/showChartData';
import datawrapperUpdateChartData from './datawrapper/updateChartData';
import scraperListCountyNumbers from './scraper/listCountyNumbers';
import scraperListStateCases from './scraper/listStateCases';
import scraperListStateDeaths from './scraper/listStateDeaths';

export default {
    scraper: {
        listCountyNumbers: scraperListCountyNumbers,
        listStateCases: scraperListStateCases,
        listStateDeaths: scraperListStateDeaths,
    },
    datawrapper: {
        me: datawrapperMe,
        listCharts: datawrapperListCharts,
        showChart: datawrapperShowChart,
        showChartData: datawrapperShowChartData,
        updateChartData: datawrapperUpdateChartData,
    },
};
