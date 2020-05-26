//===========================================================================
//  
//===========================================================================
'use-strict';
const os = require('os');
const DataSampler = require('../../utils/data_sampler');

/**
 * Calculates the total usage and total run time of a cpu and returns the results.
 * @param {CpuInfo} cpu - A CpuInfo object from os.cpus()
 * @returns {number[]} - An array of two numbers [usage time, total time]
 */
const calc_cpu_time = (cpu) => {
  const { user, nice, sys, idle, irq } = cpu.times;
  const usage = user + nice + sys + irq;
  const total = usage + idle;
  return [usage, total];
};

/**
 * Returns the usage times of each cpu, along with a timestamp of the measurement.
 * @returns an Object containing a timestamp and usage time of each cpu.
 */
const get_cpu_time = () => {
  const timestamp = Date.now();
  const usages = os.cpus().map((cpu) => calc_cpu_time(cpu));
  return { timestamp, usages };
};

/**
 * 
 */
class CpuUsage extends DataSampler {

  constructor() {
    super(() => this.measure());
    this.prevUsages = get_cpu_time();
    const interval = this.prevUsages.timestamp;
    this.snapshot = { interval, ...this.prevUsages };
    setTimeout(() => this.measure(), 200);
    console.log('CPU Usage instance initialized.');
  }

  get measurements() {
    return { ...this.snapshot };
  }

  measure() {
    const { timestamp, ...newUsages } = get_cpu_time();
    const interval = timestamp - this.prevUsages.timestamp;
    const usages = newUsages.usages.map(([usage, total], i) => {
      const [prevUsage, prevTotal] = this.prevUsages.usages[i];
      usage = usage - prevUsage;
      total = total - prevTotal;
      return [usage, total];
    });
    this.snapshot = { interval, timestamp, usages };
    this.prevUsages = { timestamp, ...newUsages };
    return { ...this.snapshot };
  }
}

const instance = new CpuUsage();

module.exports = instance;
//===========================================================================