import createServer from './createServer.js';

const PORT = process.env.PORT || 3005;

createServer().listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
