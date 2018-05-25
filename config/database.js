module.exports = {
    // Connect to the Mongo DB
    // If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
    database: process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines"
};