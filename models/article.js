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

var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;