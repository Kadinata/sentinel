//===========================================================================
//  
//===========================================================================
'use-strict';
const authProtected = require('../middleware/auth_protected');

const _HTTP_METHOD_POST = 'POST';
const _HTTP_METHOD_GET = 'GET';

class EndpointHandler {

  constructor(path, method, handler, isProtected = false) {
    this.path = path;
    this.method = method;
    this.handler = handler;
    this.isProtected = isProtected;
  }

  static get METHOD_POST() {
    return _HTTP_METHOD_POST;
  }

  static get METHOD_GET() {
    return _HTTP_METHOD_GET;
  }

  static bindEndpoints(router, ...handlers) {
    if (handlers.length === 0) return router;

    handlers.forEach((endpoint) => {
      if (endpoint.method === _HTTP_METHOD_POST) {
        if (endpoint.isProtected) {
          router.route(endpoint.path)
            .post(authProtected, (req, res, next) => endpoint.handler(req, res, next));
        } else {
          router.route(endpoint.path).post((req, res, next) => endpoint.handler(req, res, next));
        }
      } else if (endpoint.method === _HTTP_METHOD_GET) {
        if (endpoint.isProtected) {
          router.route(endpoint.path)
            .get(authProtected, (req, res, next) => endpoint.handler(req, res, next));
        } else {
          router.route(endpoint.path).get((req, res, next) => endpoint.handler(req, res, next));
        }
      }
    });
    return router;
  }
}

module.exports = EndpointHandler;
//===========================================================================