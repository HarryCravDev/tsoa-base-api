import { Response, Request } from "express";

export default function notFoundHandler(request: Request, res: Response) {
	res.status(404).send({
		message: "Route Not Found",
	});
}
