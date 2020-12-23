import express from 'express';
import { whiteBright } from 'chalk';
import routers from '../routers';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerJSDocOptions, swaggerUiOptions } from '../config/swagger';
import { useExpressServer } from 'routing-controllers';
import { urlencoded, json } from 'body-parser'
import { corsConfig } from '../config/cors'
import cors from 'cors';

export function createApp() {
    /*
    TODO: refactoring to separate middleware in 
    middlwares folder and put docs in rounting controller
    */

    const app = express();

    const c = cors(corsConfig)
    app.use(c);

    app.use(urlencoded({
        extended: true
    }));
    
    app.use(json());

    app.use('/docs',
        swaggerUi.serve,
        swaggerUi.setup(
            swaggerJSDoc(swaggerJSDocOptions),
            swaggerUiOptions));

    //Init routers    
    useExpressServer(app, {        
        controllers: [__dirname + '/../controllers/**/*.js'],
        middlewares: [__dirname + '/../middlewares/**/*.js']
    });

    //Redirect unknown router to docs
    app.all('*', (req, res) => {
        //This condition is necessary for after middlewares in routing-controllers
        //See more in https://github.com/typestack/routing-controllers/issues/266
        if (!res.headersSent) {
            res.redirect(301, '/docs');
        }
    })

    return app
}