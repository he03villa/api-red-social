import { Response } from 'express';
export const serializeErrors = (res: Response,code:number,message:string) => {
    return res.status(code).send({ errors: [{
        message
    }]});
}