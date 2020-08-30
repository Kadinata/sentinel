const express = require('express');
const handlers = require('./handler');
const router = express.Router();
const authProtected = require('../auth_protected');
const sseTest = require('./sse_test');

router.route('/unprotected').get((req, res, next) => handlers.unprotectedRoute(req, res, next));
router.use(authProtected);
router.route('/protected').get((req, res, next) => handlers.protectedRoute(req, res, next));
router.route('/sse').get(sseTest);

module.exports = router;
