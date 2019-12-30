import AuthenticationService from "../services/http/endpoints/auth";

function useAuth() {
	async function loginUser(username: string, password: string) {
		const res = await AuthenticationService.login(username, password);

		return res;
	}

	return {
		loginUser,
	};
}

export default useAuth;
