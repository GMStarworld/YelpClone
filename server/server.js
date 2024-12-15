/*Below we use ES module, we can also do: const express = require ("express")
To use the ES module we have to add "type":"module" to the package.json file*/
import "dotenv/config.js";
import express from "express";
import morgan from "morgan";

//We create an instance of express and store It In the app variable
const app = express();

/*We define our middleware that has full access to our request and response
The next parameter Is a function that tells our middleware to send the request to the next handler
If our middleware Is on top, It will run before the handlers and viceversa
app.use((req, res, next) =>{
    console.log("Im a middleware");
    next();
});
app.use(morgan("tiny"));
*/

//By using this built-In express middleware we can attach the body of the request to the request object as a body property
app.use(express.json());

/*Within the get route we can receive a request and send a response
Get all restaurants*/
app.get("/api/v1/restaurants", (req, res) => {
    //res.send("Something"); to send plain text
    res.status(200).json({
        data: {
            restaurant: ["MCDonalds", "Sandro"]
        }
    })
});

//We add an url parameter to the path
//Get a restaurant by ID
app.get("/api/v1/restaurants/:id", (req, res) => {
    res.status(201).json({
        status: "success",
        data: {
            restaurant: ["MCDonalds", "Sandro"]
        }
    })
});

app.post("/api/v1/restaurants", (req, res)=>{
    console.log(req.body)
});

app.put("/api/v1/restaurants/:id", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["MCDonalds", "Sandro"]
        }
    })
});

app.delete("/api/v1/restaurants", (req, res)=>{
    
});

//appl.listen (port, callback function) to make our application listen In a specific port
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});