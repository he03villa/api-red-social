import { CustomError } from './custom-error'
export class NotAuthorizedError extends CustomError {
    statusCode = 401;

    constructor () {
      super('not authorized')
      // only because we are extending a built in class
      Object.setPrototypeOf(this, NotAuthorizedError.prototype)
    }

    serializeErrors () {
      console.error('que pedo');
      return [
        { message: 'not authorized' }
      ]
    }
}
