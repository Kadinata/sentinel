//===========================================================================
//  
//===========================================================================
const service = require('./service');

const baseHandler = (datasource) => async (req, res, next) => {
  try {
    const data = await datasource();
    res.json(data);
  } catch (err) {
    res.send('Server Error!');
  }
};

const fetchAll = baseHandler(service.fetchAll);
const memory = baseHandler(service.memory);
const netstat = baseHandler(service.network);
const storage = baseHandler(service.hdd);
const cpu = baseHandler(service.cpu);
const os = baseHandler(service.os);

module.exports = { memory, netstat, storage, os, cpu, fetchAll };

//===========================================================================