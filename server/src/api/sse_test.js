//===========================================================================
//  
//===========================================================================
const express = require('express');
const sse = require('../utils/sse_handler');
const DataSampler = require('../utils/data_sampler');
const service = require('../services/sysinfo');

const router = express.Router();
const testHandler = sse.Handler();
const testSampler = new DataSampler(() => service.systime.getAll());
const cpuUsage = service.cpuUsage;

// testSampler.on('data', data => testHandler.send(data));
testHandler.on('clientChange', (count) => {
  if (count > 0) {
    // testSampler.start(1000);
    // cpuUsage.start(1000);
  } else {
    // cpuUsage.stop();
    // testSampler.stop();
  }
});

cpuUsage.on('data', data => testHandler.send(data));

const baseHandler = (datasource) => async (req, res, next) => {
  try {
    const data = await datasource();
    res.write(JSON.stringify(data));
  } catch (err) {
    console.log(err);
    res.send('Server Error!');
  }
};

const handler = baseHandler(() => ({
  hello: 'world',
  time: Date.now(),
}));

router.route('/').get(
  (req, res, next) => testHandler.handleRequest(req, res, next),
  handler,
);

module.exports = router;
//===========================================================================