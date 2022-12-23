import { Router } from "express";

import AuthenticationUserController from "@modules/accounts/useCases/authenticationUser/AuthenticationUserController";
import RefreshTokensController from "@modules/accounts/useCases/refreshTokens/RefreshTokensController";

const authenticateRoutes = Router();

const authenticationUserController = new AuthenticationUserController();
const refreshTokensController = new RefreshTokensController();

authenticateRoutes.post("/sessions", authenticationUserController.handle);
authenticateRoutes.post("/refresh-tokens", refreshTokensController.handle);

export default authenticateRoutes;
