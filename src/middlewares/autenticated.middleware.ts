import { NextFunction, Request, Response } from 'express';
import jwt from 'jwt-simple';
import { BabRequestError } from '../errors';
const secret = 'examen_app';

export const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
    const autho = req.get('Authorization');
    if (!autho) {
        throw new BabRequestError('La petición no tiene la cabecera de autenticación');
    }
    const token = autho.replace(/['"]+/g, '');
    try {
        const payload = jwt.decode(token, secret);
        req.user = payload;
    } catch (error) {
        throw new BabRequestError('El token no es valido');
    }
    next();
};