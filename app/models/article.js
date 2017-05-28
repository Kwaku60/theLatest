// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Make ArticlesSchema a Schema
var ArticleSchema = new Schema({

  link: {
    type: String,
    unique: true
  },
 

  comments: [{
    type: Schema.Types.ObjectId,
    ref: "comments"
  }]
});

// Save the Library model using the LibrarySchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the Library model
module.exports = Library;