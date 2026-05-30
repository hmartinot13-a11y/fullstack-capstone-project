// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    try {
      //if (dbInstance){
      //  return dbInstance
      //};
            
      /*---
      useNewUrlParser: true
      This option tells the MongoDB driver to use the new URL string parser instead of the deprecated one. The new parser handles connection strings more reliably and supports modern connection string features.
      ---
      useUnifiedTopology: true
      This enables the new unified topology layer in the MongoDB driver. It improves server discovery and monitoring, handles failover more robustly, and provides a more stable connection experience.
      ---*/
      // Task 1: Connect to MongoDB
      const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
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
};
module.exports = connectToDatabase;
