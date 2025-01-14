import createServer from './createServer.js';

const PORT = process.env.PORT || 3005;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

createServer().listen(PORT, () => {
  console.log(`server is running at http://${HOSTNAME}:${PORT}`);
});
