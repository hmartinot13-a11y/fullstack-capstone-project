const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

// Search for gifts
router.get('/', async (req, res, next) => {
    try {
        // Task 1: Connect to MongoDB using connectToDatabase database. Remember to use the await keyword and store the connection in `db`
        const db = await connectToDatabase();

        const collection = db.collection("gifts");

        // Initialize the query object
        let query = {};

        // Add the name filter to the query if the name parameter is not empty
        console.log("before: " + JSON.stringify(req.query.name,null,4));
        if (req.query.name && req.query.name.trim() !== '')
        {
            query.name = { $regex: req.query.name, $options: "i" }; // Using regex for partial match, case-insensitive
            console.log("query.name: " + JSON.stringify(query.name,null,4));
        }
        console.log("after: " + JSON.stringify(req.query.name,null,4));
        // Task 3: Add other filters to the query
        if (req.query.category) {
            // {{insert code here}}
            query.category = req.query.category;
            console.log("query.category: " + query.category);
        }
        if (req.query.condition) {
            // {{insert code here}} 
            query.condition = req.query.condition;
            console.log("query.condition: " + query.condition);
        }
        if (req.query.age_years) {
            // {{insert code here}}
            query.age_years = { $lte: parseInt(req.query.age_years) };
            console.log("query.age_years: " + JSON.stringify(query.age_years,null,4));
        }

        // Task 4: Fetch filtered gifts using the find(query) method. Make sure to use await and store the result in the `gifts` constant
        // {{insert code here here}}
        gifts = await collection.find(query).toArray();
        console.log("query: " + JSON.stringify(query,null,4));
        res.json(gifts);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
