const CustomAPIError = require('./custom-error')

class unauthenticatdError extends CustomAPIError {
    constructor(message) {
      super(message)
this.statusCode = this.StatusCodes.UNAUTHORIZED
    }
  }

  module.exports = unauthenticatdError
