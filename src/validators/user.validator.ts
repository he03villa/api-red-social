import { Request, Response, NextFunction } from 'express';
import { body, param } from 'express-validator';
import UserService from '../services/user.service';
import { serializeErrors } from '../services/error.service';
import { Types } from 'mongoose';

const userService = new UserService();

class UserValidator {
    public saveUsuario = [
        body("FullName").notEmpty().withMessage("El FullName del usuario es requerido"),
        body("Age").notEmpty().withMessage("El Age del usuario es requerido"),
        body("Email").notEmpty().withMessage("El Email del usuario es requerido").isEmail().withMessage("El Email no tiene el formato"),
        body("Password").notEmpty().withMessage("El Password del usuario es requerido")
    ];
    public login = [
        body("Email").notEmpty().withMessage("El Email del usuario es requerido").isEmail().withMessage("El Email no tiene el formato"),
        body("Password").notEmpty().withMessage("El Password del usuario es requerido")
    ];
    public updateUsuario = [
        body("FullName").notEmpty().withMessage("El FullName del usuario es requerido"),
        body("Age").notEmpty().withMessage("El Age del usuario es requerido"),
    ];
    public id = [
        param("id").notEmpty().withMessage("El id del usuario es requerido"),
    ];

    public existeUser = async (req: Request, res: Response, next: NextFunction) => {
        const { Email } = req.body;
        const user = await userService.getUser(Email);
        if (user != null) serializeErrors(res, 400, `El correo ${ Email } ya existe`);
        next();
    };

    public validarUserToken = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const { userId } = req.body;
            let Id = id || userId;
            if (Id.length == 24) {
                if (!Types.ObjectId.isValid(Id)){
                    serializeErrors(res, 400, 'El formato del id no es corresto');
                } else {
                    const user = req.user._id;
                    if (Id != user) serializeErrors(res, 400, 'No tienes permiso');
                }
            } else { 
                serializeErrors(res, 400, 'El formato del id no es corresto');
            }
        } catch (error) {
            serializeErrors(res, 400, 'El formato del id no es corresto');
        }
        next();
    };
}

export default UserValidator