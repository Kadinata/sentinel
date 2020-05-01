//===========================================================================
//  
//===========================================================================
'use-strict';

class SSEHandler {

  constructor() {
    this.clients = {};
  }

  handleRequest(req, res, next) {
    const headers = {
      'Content-Type': 'text/event-stream',
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache'
    };
    res.writeHead(200, headers);
    // console.log(this instanceof SSEHandler);
    // console.log(this.clients);
    this.addClient(req, res);
  }

  addClient(req, res) {
    const client_id = Date.now();
    this.clients[`${client_id}`] = res;
    req.on('close', () => this.removeClient(client_id));
    // console.log(`SSE: Client Added: ${client_id}`);
    return client_id;
  }

  removeClient(client_id) {
    client_id = `${client_id}`;
    const {
      [client_id]: removed,
      ...clients
    } = this.clients;
    removed.end();
    this.clients = clients;
    // console.log(`SSE: Client Removed: ${client_id}`);
  }

  send(data) {
    Object.values(this.clients).forEach(res => res.write(JSON.stringify(data)));
  }
}

module.exports = {
  Handler: () => new SSEHandler(),
};
//===========================================================================