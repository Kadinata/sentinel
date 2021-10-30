//===========================================================================
//  
//===========================================================================
'use-strict';

class GpioError extends Error {

  constructor(message) {
    super();
    this.message = message;
  }

}

module.exports = GpioError;

//===========================================================================
