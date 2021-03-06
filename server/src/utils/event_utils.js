//===========================================================================
//  
//===========================================================================
'use-strict';

const once = async (emitter, name) => {
  return new Promise((resolve, reject) => {
    emitter.once(name, (...value) => resolve({ name, value }));
  });
};

module.exports = { once };

//===========================================================================