
var path = require("path");
var express = require('express'),
var articeController = require('../controllers/articleController'),




//could alternatively do a router.get if this doesn't run, export it afterwards
var router = express.Router();


//could alternatively do a router.get if this doesn't run
module.exports = function(app, passport) {


//when user clicks save, save an article to articles database and push it 
//to the "savedArticles" array from the userSchema for that user 
app.post('/save', articleController.saveScrapedNews);


//view saved on Click. populate all of the articles stored in "savedArticles" array
//from the userSchema for the loggged in user
//store the articles into an array and pass it into a load comments function that
//populates all of the comments associated with each article via each articles array of "comments"
app.get('/view', articleController.viewSaved);


//save a new comment (username and body), push it to the comments array into the appropriate article schema
app.post('/comment', articleController.postComment);

//delete a comment directly from the comments schema
// app.post('/deleteComment', articleController.removeComment);

//remove an article from the user's array of articles 
//app.get('/remove', articleController.removeArticle);

}