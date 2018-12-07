import express from 'express';
import config from './../../config.js';

let app = express();
app.use(express.json({limit: '50mb'}));
app.use(require('./../apis/index'));

app.listen(config.APP_SERVER_PORT_NO, () => console.log('React Rendering Server started on port:', config.APP_SERVER_PORT_NO));

export default app;

