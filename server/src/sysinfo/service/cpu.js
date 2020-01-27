//===========================================================================
//  
//===========================================================================
const os = require('os');
const promise_exec = require('../../utils/promise_exec');

// Caches
let cached_processor = null;
let cached_core_count = 0;

const get_cpu_temp = async () => {
  const command = "/usr/bin/vcgencmd measure_temp";
  try {
    let cpu_temp = await promise_exec(command);
    return parseFloat(cpu_temp.match(/\d+\.\d+/i));
  } catch (err) {
    return Promise.reject(err);
  }
};

const count_cores = async () => {
  if (cached_core_count > 0) return cached_core_count;

  const command = 'nproc';
  try {
    let core_count = await promise_exec(command);
    cached_core_count = parseInt(core_count);
    return cached_core_count;
  } catch (err) {
    return Promise.reject(err);
  }
};

const get_cpu_freq = async () => {
  const command = 'cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_cur_freq';
  try {
    let cpu_freq = await promise_exec(command);
    cpu_freq = parseInt(cpu_freq) / 1000.0;
    return cpu_freq;
  } catch (err) {
    return Promise.reject(err);
  }
};

const get_core_voltage = async () => {
  const command = 'vcgencmd measure_volts core';
  try {
    let core_volts = await promise_exec(command);
    return parseFloat(core_volts.match(/\d+\.\d+/i));
  } catch (err) {
    return Promise.reject(err);
  }
};

const get_proc_info = async () => {
  if (cached_processor) return cached_processor;

  const command = 'cat /proc/cpuinfo | grep Processor';
  try {
    let processor = await promise_exec(command);
    processor = processor.split('\n').shift();
    processor = processor.split(': ').pop();
    cached_processor = processor;
    return cached_processor;
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports = async () => {
  try {
    const processor = await get_proc_info();
    const cpu_temp = await get_cpu_temp();
    const core_voltage = await get_core_voltage();
    const core_num = await count_cores();
    const cpu_freq = await get_cpu_freq();
    const [load_1, load_5, load_15] = os.loadavg();
    return { cpu_temp, cpu_freq, core_voltage, core_num, load_1, load_5, load_15, processor };
  } catch (err) {
    return Promise.reject(err);
  }
};

//===========================================================================