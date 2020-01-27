//===========================================================================
//  
//===========================================================================
const os = require('os');

const getUptime = () => os.uptime();
const getLocaltime = () => {

  const date = new Date();
  const yyyy = String(date.getFullYear());
  const mm = String(date.getMonth() + 1).padStart(2, 0);
  const dd = String(date.getDate()).padStart(2, 0);
  const hour = String(date.getHours()).padStart(2, 0);
  const minute = String(date.getMinutes()).padStart(2, 0);
  const second = String(date.getSeconds()).padStart(2, 0);
  const msec = String(date.getMilliseconds()).padEnd(3, 0);

  // TODO: Add UTC offset

  return `${yyyy}-${mm}-${dd}T${hour}:${minute}:${second}.${msec}`;
};

const getAll = () => {
  const uptime = getUptime();
  const localtime = getLocaltime();
  return { uptime, localtime };
};

module.exports = { getUptime, getLocaltime, getAll };