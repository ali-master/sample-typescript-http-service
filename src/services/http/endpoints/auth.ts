import BaseAPI from "..";

export class Authentication extends BaseAPI {
	constructor() {
		super({
			suffix: "auth/",
		});
	}

	// http://api.server.com/v1/api/auth/user/login
	public login(username: string, password: string): Promise<any> {
		return this.httpService.post("user/login", {
			username,
			password,
		});
	}
	// http://api.server.com/v1/api/auth/logout
	public logout(username: string, password: string): Promise<any> {
		return this.httpService.post("user/login", {
			username,
			password,
		});
	}
	// http://api.server.com/v1/api/auth/register
	public register(username: string, password: string): Promise<any> {
		return this.httpService.post("user/login", {
			username,
			password,
		});
	}
	// http://api.server.com/v1/api/auth/forgot-password
	public forgotPassword(username: string, password: string): Promise<any> {
		return this.httpService.post("user/login", {
			username,
			password,
		});
	}
	// http://api.server.com/v1/api/auth/reset-password
	public resetPassword(username: string, password: string): Promise<any> {
		return this.httpService.post("user/login", {
			username,
			password,
		});
	}
}

const AuthenticationService = new Authentication();

export default AuthenticationService;
