import { createContext, useContext } from "react";
import AuthenticationService, { Authentication } from "../services/http/endpoints/auth";

export const AuthenticationServiceContext = createContext<Authentication>(AuthenticationService);

export const useAuthService = () => useContext(AuthenticationServiceContext);
