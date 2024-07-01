const express = require('express');
// import express from 'express';
const errorMiddleWare = require("./middleware/error")

const app = express();

// MIDDLE WARE for JSON
app.use(express.json());

//Route Import
const product = require("./Routes/startupRoute");

app.use("/api", product);
// app.use("/api/v1", user);

// Middle ware for error
app.use(errorMiddleWare);


module.exports = app;
