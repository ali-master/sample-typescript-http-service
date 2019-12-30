import * as React from "react";
// State contexts and store utilities
import { StateContext, DispatchContext } from "./state";
import { reducer, initialState } from "./state/user/user.reducer";
// Shared components
import { Family } from "./components/Family";
// Authentication service and context
import { AuthenticationServiceContext } from "./hooks/authService";
import AuthenticationService from "./services/http/endpoints/auth";
// Styles
import "./App.css";
// Assets
import logo from "./logo.svg";

const App: React.FC = () => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				<AuthenticationServiceContext.Provider value={AuthenticationService}>
					<div className="App">
						<header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<Family />
							<p>{/* Edit <code>src/App.tsx</code> and save to reload. */}</p>
							<a
								className="App-link"
								href="https://reactjs.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								Learn React
							</a>
						</header>
					</div>
				</AuthenticationServiceContext.Provider>
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
};

export default App;
