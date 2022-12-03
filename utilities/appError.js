/*
Name: Nikita Goel
Date: 3rd December, 2022
Description: This file is used to define the errors encountered in the code by providing the required error status code
*/
class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
  
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = AppError;