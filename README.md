# New Jersey Coronavirus Map API 🗺️

API for [njcoronavirus.com](https://njcoronavirus.com). This website that displays up-to-date information on Coronavirus cases in New Jersey.

## Feel At Risk? 🆘

If you think you have been exposed to COVID-19 and develop a fever and symptoms of respiratory illness, such as cough or difficulty breathing, call your healthcare provider immediately.

For more information, please visit the [Centers for Disease Control and Prevention](https://www.cdc.gov/coronavirus/2019-ncov/about/steps-when-sick.html).

## Prerequisites ⛇

Have installed:

-   [Node](https://nodejs.org/en/)
-   [Docker](https://www.docker.com/)

## Getting Started 🏃

1. Clone repo.
2. Install all dependencies.
3. Get the .env file.
4. Run the redis container (`docker-compose up`). Make sure you have [Docker](https://www.docker.com/) installed and running.
5. Run app (`yarn start`).

## Technologies 🕹️

-   [Node](https://nodejs.org/en/)
-   [Express](https://expressjs.com/)
-   [Redis](https://redis.io/)
-   [Docker](https://www.docker.com/)
-   [Datawrapper API](https://developer.datawrapper.de/)

## Resources 📒

-   [CDC](https://www.cdc.gov/coronavirus/2019-ncov/index.html)
-   [nj.com](https://www.nj.com/)
-   [NJ Department of Health](https://www.nj.gov/health/)

### Technical Resources ⚙️

-   [Docker Compose NodeJS Application with Redis Integration](http://progressivecoder.com/docker-compose-nodejs-application-with-redis-integration/)
-   [Using Redis with Node.js](https://www.sitepoint.com/using-redis-node-js/)

## Credits/Disclaimer 👏

Pictures and information written about COVID-19 are not done by me. Credit goes to [Centers for Disease Control and Prevention](https://www.cdc.gov/coronavirus/2019-ncov/index.html). For more information, please visit their [website](https://www.cdc.gov/coronavirus/2019-ncov/index.html).

## Todo ☑️

-   Finish scripts that gets all data (county cases, total state cases, total state deaths) and pushes them to csv
-   Be able to automate description for both charts
-   Have every route that shows data to have a redis cache
-   Host this on the web
