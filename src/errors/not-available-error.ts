import { CustomError } from './custom-error'
export class NotAvailableError extends CustomError {
    statusCode = 503;
    public messageError:string | null
    constructor (message:string | null = null) {
      super(message || 'Service Unavailable at the moment')
      this.messageError = message || null
      // only because we are extending a built in class
      Object.setPrototypeOf(this, NotAvailableError.prototype)
    }

    serializeErrors () {
      return [
        { message: this.messageError || 'Service Unavailable at the moment' }
      ]
    }
}
