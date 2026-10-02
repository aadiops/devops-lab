const http = require('http');

const PORT = process.env.PORT || 3000;
const HOSTNAME = '0.0.0.0';

function buildResponse() {
  return {
    status: 'ok',
    service: 'devops-lab',
    timestamp: new Date().toISOString()
  };
}

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(buildResponse()));
});

if (require.main === module) {
  server.listen(PORT, HOSTNAME, () => {
    console.log(`devops-lab running on http://${HOSTNAME}:${PORT}`);
  });
}

module.exports = {
  buildResponse,
  server
};
