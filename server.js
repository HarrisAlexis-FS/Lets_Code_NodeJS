const http = require('http');
const app = require('./app/app');
require("dotenv").config();

http.createServer(app).listen(process.env.port, () => {
    console.log(`server is running in port ${process.env.port}`);
});

//server file does one thing only and one thing well