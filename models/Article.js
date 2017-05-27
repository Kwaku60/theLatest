// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Make ArticlesSchema a Schema
var ArticleSchema = new Schema({
  // name: a unique string
  name: {
    type: String,
    unique: true
  },
  // interactions is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Book model
  // This will let us populate the library with these books, rather than the ids,
  // using Mongoose's populate method (See the routes in Server.js)
  interaction: [{
    type: Schema.Types.ObjectId,
    ref: "Interactions"
  }]
});

// Save the Library model using the LibrarySchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the Library model
module.exports = Library;