/*Below we use ES module, we can also do: const express = require ("express")
To use the ES module we have to add "type":"module" to the package.json file*/
import "dotenv/config.js";
import express from "express";

//We create an instance of express and store It In the app variable
const app = express()

//appl.listen (port, callback function)
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});