import * as Types from "./user.constants";

interface IPrepare {
	name: string;
	family: string;
}
export const prepareUserAction = (payload: IPrepare) => {
	return {
		type: Types.PREPARE,
		payload,
	};
};
