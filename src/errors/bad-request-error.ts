import { CustomError } from './custom-error';
export class BabRequestError extends CustomError {
    statusCode = 400;
    message:string;
    constructor(messageIn:string) {
        super(messageIn);
        this.message = messageIn;
        Object.setPrototypeOf(this, BabRequestError.prototype);
    }

    serializeErrors() {
        return [
            { message: this.message }
        ]
    }

}