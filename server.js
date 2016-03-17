'use strict';

const express = require('express');
const routes = require('./route');

const app = express();

app.set("port", process.env.PORT || 8080);
   
routes(app);

app.listen(app.get("port"), function () {
   console.log(`Node.js listening on port ${app.get("port")}...`);
});

