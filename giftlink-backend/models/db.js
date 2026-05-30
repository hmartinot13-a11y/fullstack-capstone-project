// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    try {
      if (dbInstance){
        return dbInstance
      };

      const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
      // Task 1: Connect to MongoDB
      await client.connect();

      // Task 2: Connect to database giftDB and store in variable dbInstance
      const dbInstance = client.db(dbName);
      console.log("Connect to giftDB successfull.");

      // Task 3: Return database instance
      return dbInstance;
      } catch (error) {
        console.error("Erreur de connexion à MongoDB:", error);
        throw error;
      }      
}
module.exports = connectToDatabase;
