'use strict';

const express = require('express');
const routes = require('./route');

const app = express();
   
routes(app);

app.listen(8080, function () {
   console.log('Node.js listening on port 8080...');
});

