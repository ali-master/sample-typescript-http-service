import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";

interface IConfig {
	suffix?: string;
	baseURL?: string;
}

export default abstract class BaseAPI {
	protected httpService: AxiosInstance;

	constructor(config: IConfig) {
		config.baseURL = config.baseURL || "http://api.server.com/v1/api";
		config.suffix = config.suffix || "";

		this.httpService = axios.create({
			baseURL: `${config.baseURL}/${config.suffix}`,
		});

		this.requestInterceptor();
		this.responseInterceptor();
	}

	protected responseInterceptor() {
		this.httpService.interceptors.response.use((response: AxiosResponse) => {
			return response.data ? response.data : response;
		});
	}

	protected requestInterceptor() {
		// @ts-ignore
		this.httpService.interceptors.request.use((config: AxiosRequestConfig) => {
			if (!config.headers.Authorization) {
				const token = window.localStorage.getItem("token");

				if (token) {
					config.headers.Authorization = token;
				}

				return config;
			}
		});
	}
}
