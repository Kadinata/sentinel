//===========================================================================
//  
//===========================================================================
const express = require('express');
const handler = require('./handler');
const router = express.Router();

router.route('/').get(handler.fetchAll);
router.route('/os').get(handler.os);
router.route('/cpu').get(handler.cpu);
router.route('/memory').get(handler.memory);
router.route('/netstat').get(handler.netstat);
router.route('/storage').get(handler.storage);
router.route('/time').get(handler.systime);
router.route('/uptime').get(handler.uptime);
router.route('/localtime').get(handler.localtime);

module.exports = router;