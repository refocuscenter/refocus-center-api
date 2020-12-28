import { Request, Response } from 'express';

/**
 * Redirect unknown router to docs
 */
export function redirectToDocs(request: Request, response: Response) {
    //This condition is necessary for after middlewares in routing-controllers
    //See more in https://github.com/typestack/routing-controllers/issues/266
    if (!response.headersSent) {
        response.redirect(301, '/docs');
    }
}
