require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DATABASE_PASS;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log("Connected to database!");

client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});

