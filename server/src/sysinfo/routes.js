//===========================================================================
//  
//===========================================================================
const express = require('express');
const handler = require('./handler');
const router = express.Router();

router.route('/').get(handler.fetchAll);
router.route('/memory').get(handler.memory);
router.route('/netstat').get(handler.netstat);
router.route('/storage').get(handler.storage);
router.route('/cpu').get(handler.cpu);
router.route('/os').get(handler.os);

module.exports = router;