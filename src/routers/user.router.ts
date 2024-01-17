import { Router } from "express";
import UserController from "../controllers/user.controller";
import UserValidator from "../validators/user.validator";
import { ensureAuth, validaRequest } from "../middlewares";

const userRouter = Router();
const userController = new UserController();
const userValidator = new UserValidator();

userRouter.post(
    '/saveUser',
    userValidator.saveUsuario,
    userValidator.existeUser,
    validaRequest,
    userController.saveUsuario
);

userRouter.post(
    '/login',
    userValidator.login,
    validaRequest,
    userController.login
);

userRouter.put(
    '/actulizarUsuario/:id',
    ensureAuth,
    userValidator.id,
    userValidator.updateUsuario,
    userValidator.validarUserToken,
    validaRequest,
    userController.updateUsuario
);

export default userRouter;