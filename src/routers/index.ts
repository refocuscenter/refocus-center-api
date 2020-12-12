import { Router } from 'express';

const routerExport = Router();

const routerFiles = [
    './status',
    './user' 
]

function getImports(): Router[] {
    return routerFiles.map((router) => { return require(router).default });
}

getImports()
    .forEach(router => routerExport.use(router))

export default routerExport;