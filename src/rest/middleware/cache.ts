import { NextFunction, Request, Response } from "express";

export function removeCache(req: Request, res: Response, next: NextFunction) {
	res.set("Cache-control", `no-store`);
	next();
}
