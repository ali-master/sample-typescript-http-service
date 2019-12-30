import * as React from "react";
import { initialState, State, Action } from "./user/user.reducer";

export const StateContext = React.createContext(initialState as State);
export const DispatchContext = React.createContext((() => 0) as React.Dispatch<Action>);

export const useGlobalState = () => React.useContext(StateContext);
export const useGlobalDispatch = () => React.useContext(DispatchContext);
