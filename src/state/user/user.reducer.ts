import { Actions } from "./user.constants";

export interface State {
	name: string;
	family: string;
	relationships: State[];
}

export const initialState = {
	name: "goldon",
	family: "baghcheh",
	relationships: [],
};

export interface Action {
	type: Actions;
	payload?: any;
}

export function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "PREPARE":
			return {
				...state,
				name: action.payload.name,
				family: action.payload.family,
			};
		default:
			return state;
	}
}
