const express = require('express');
const path = require('path');
const server = express();
// const __dirname = path.resolve();


let env = "production";
if (env === 'production') {
36

  server.use(express.static(path.join(__dirname, '../myapp/build')));
  server.get('*', (req, res) =>
   res.sendFile(path.resolve(__dirname, '../myapp', 'build', 'index.html'))
  );
 } else {
  server.get('/', (req, res) => {
   res.send('API is running....');
  });
 }


server.listen(4000, () => {
  console.log('Server is running on port 4000');
});