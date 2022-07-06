import { Controller, Get, Route } from "tsoa";

@Route("users")
export class UsersController extends Controller {
	@Get()
	public async test(): Promise<any> {
		return { success: true, message: "Route working..." };
	}
}
