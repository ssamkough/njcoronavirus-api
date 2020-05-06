require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './router';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/api', router);

app.get('/', (req, res) => {
    const fullUrl: string = req.protocol + '://' + req.get('host') + req.originalUrl + 'api';

    res.status(200).send('<a href="' + fullUrl + '">' + fullUrl + '</a>');
});

const onAppStarted = () => {
    console.log(`App running on ${port}.`);
};

const port = parseInt(process.env.PORT) || 8000;
app.listen(port, onAppStarted);
