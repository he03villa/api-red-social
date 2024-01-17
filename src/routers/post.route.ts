import { Router } from "express";
import PostController from "../controllers/post.controller";
import { ensureAuth, validaRequest } from "../middlewares";
import UserValidator from "../validators/user.validator";
import PostValidator from "../validators/post.validator";

const postRouter = Router();
const postController = new PostController();
const userValidator = new UserValidator();
const postValidator = new PostValidator();

postRouter.get(
    '/getAllPost',
    ensureAuth,
    postController.getAllPost
);

postRouter.post(
    '/savePost',
    ensureAuth,
    userValidator.validarUserToken,
    postValidator.savePost,
    validaRequest,
    postController.savePost
);

postRouter.put(
    '/updatePost/:id',
    ensureAuth,
    postValidator.updatePost,
    postValidator.id,
    validaRequest,
    postController.updatePost
);

postRouter.delete(
    '/deletePost/:id',
    ensureAuth,
    postValidator.id,
    validaRequest,
    postController.deletePost
);

postRouter.put(
    '/likePost/:id',
    ensureAuth,
    postValidator.id,
    validaRequest,
    postController.likePost
);

export default postRouter;