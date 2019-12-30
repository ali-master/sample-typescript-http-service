import React from "react";
import { useGlobalState, useGlobalDispatch } from "../../state";
import { prepareUserAction } from "../../state/user/user.actions";
import { useAuthService } from "../../hooks/authService";

export const Family: React.FC = () => {
	const state = useGlobalState();
	const dispatch = useGlobalDispatch();
	const authService = useAuthService();

	async function handleChangeState(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();

		dispatch(
			prepareUserAction({
				name: "Ali",
				family: "Torki",
			}),
		);

		await authService.login("test", "test");
	}

	return (
		<div>
			My name is {state.name} and surename is {state.family}
			<button onClick={e => handleChangeState(e)}>Change State</button>
		</div>
	);
};
