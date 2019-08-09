//===========================================================================
//  
//===========================================================================
'use-strict';
const promise_exec = require('./promise_exec');

const get_rx_stats = (response) => {
  const packets = response.match(/RX\s+packets\s(?<packets>\d+)/i).groups;
  const bytes = response.match(/RX.*bytes\s(?<bytes>\d+)/i).groups;
  const error = response.match(/RX\s+errors\s+(?<error>\d+)/i).groups;
  const dropped = response.match(/RX.*dropped\s(?<dropped>\d+)/i).groups;
  return { ...packets, ...bytes, ...error, ...dropped };
};

const get_tx_stats = (response) => {
  const packets = response.match(/TX\s+packets\s(?<packets>\d+)/i).groups;
  const bytes = response.match(/TX.*bytes\s(?<bytes>\d+)/i).groups;
  const error = response.match(/TX\s+errors\s+(?<error>\d+)/i).groups;
  const dropped = response.match(/TX.*dropped\s(?<dropped>\d+)/i).groups;
  return { ...packets, ...bytes, ...error, ...dropped };
};

module.exports = async () => {
  const command = 'ifconfig wlan0';
  try {
    const response = await promise_exec(command);
    const rx = get_rx_stats(response);
    const tx = get_tx_stats(response);
    return { rx, tx };
  } catch (err) {
    return Promise.reject(err);
  }
};

//===========================================================================