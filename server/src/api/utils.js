//===========================================================================
//  
//===========================================================================
'use-strict';
const Errors = require('../utils/errors');

const basicGetHandler = (datasource) => async (req, res, next) => {
  try {
    const data = await datasource();
    res.json(data);
  } catch (err) {
    console.log(err);
    const message = 'An internal server error occurred.';
    next(new Errors.GenericError(message));
  }
};

const basicPostHandler = (data_handler, default_data = {}) => async (req, res, next) => {
  try {
    await data_handler(req.body || default_data);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    const message = 'An internal server error occurred.';
    next(new Errors.GenericError(message));
  }
};

module.exports = {
  basicGetHandler,
  basicPostHandler,
};
//===========================================================================
