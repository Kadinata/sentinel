//===========================================================================
//  
//===========================================================================
'use-strict';
const os = require('os');
const promise_exec = require('../../utils/promise_exec');

// Caches
let cached_distro = null;

const get_host_ip = async () => {
  const command = 'hostname -I';
  try {
    const response = await promise_exec(command);
    return response.trim();
  } catch (err) {
    return Promise.reject(err);
  }
};

const get_distro = async () => {
  if (cached_distro) return cached_distro;

  const command = 'lsb_release -a';
  try {
    const response = await promise_exec(command);
    const matches = response.match(/Description:\s+(?<dist>.*)/i).groups;
    cached_distro = matches.dist;
    return cached_distro;
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = async () => {
  try {
    const host_ip = await get_host_ip();
    const distribution = await get_distro();
    const hostname = os.hostname();
    const type = os.type();
    const platform = os.platform();
    const arch = os.arch();
    const release = os.release();
    return { hostname, host_ip, type, platform, arch, release, distribution };
  } catch (err) {
    return Promise.reject(err);
  }
};

//===========================================================================