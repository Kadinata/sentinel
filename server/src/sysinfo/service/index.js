//===========================================================================
//  
//===========================================================================
const cpu = require('./cpu');
const memory = require('./memory');
const os = require('./os');
const hdd = require('./hdd');
const network = require('./network');
const systime = require('./systime');

const fetchAll = async () => {
  try {
    const hdd_info = await hdd();
    const cpu_info = await cpu();
    const os_info = await os();
    const netstats = await network();
    const mem_info = memory();
    const localtime = systime.getLocaltime();
    const uptime = systime.getUptime();
    return { os_info, cpu_info, hdd_info, mem_info, netstats, uptime, localtime };
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = { memory, os, cpu, hdd, network, systime, fetchAll };

//===========================================================================