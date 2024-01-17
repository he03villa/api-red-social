import { Request, Response, NextFunction } from 'express';
import { body, param } from 'express-validator';

class PostValidator {
    public savePost = [
        body("Title").notEmpty().withMessage("El Title del post es requerido"),
        body("Content").notEmpty().withMessage("El Content del post es requerido"),
        body("userId").notEmpty().withMessage("El userId del post es requerido"),
    ];

    public updatePost = [
        body("Title").notEmpty().withMessage("El Title del post es requerido"),
        body("Content").notEmpty().withMessage("El Content del post es requerido"),
    ];

    public id = [
        param("id").notEmpty().withMessage("El id del post es requerido"),
    ];
}

export default PostValidator