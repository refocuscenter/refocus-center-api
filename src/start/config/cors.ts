import { CorsOptions, CorsOptionsDelegate, CorsRequest } from "cors";

type AllCorsOptions = CorsOptions | CorsOptionsDelegate<CorsRequest>;

export const corsConfig: AllCorsOptions = {
	origin: "",
};
