const express = require("express");
const path = require("path");
const hbs = require("hbs");
const mongoose = require("mongoose") 
const port = process.env.PORT || 4000;

const app = express();
console.log(__dirname) ;
app.set("views", path.join(__dirname, "/../templates/views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "/../templates/views/partials"));
app.use(express.static(path.join(__dirname, "/../public")));


// db connection 

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nepalsss008:fOFqQmSY4kXrwBDC@cluster0.ifwhhah.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}); 

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.render("index.hbs");
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
