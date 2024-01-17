import express from 'express';
import bodyParser from 'body-parser';
import { errorHalden } from './middlewares/errorrhalden.middleware';

const app = express();

//cargar rutas
import userRouter from './routers/user.router';
import postRouter from './routers/post.route';

//middlewares
app.use(bodyParser.urlencoded({ extended:false, limit: '50mb' }));
app.use(bodyParser.json({limit: '50mb'}));

//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});

//rutas
app.use('/api', userRouter);
app.use('/api', postRouter);

//error
app.use(errorHalden);

//export
export = app;