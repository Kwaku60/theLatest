
var Article = require('../models/Article');
 var Scraped = require('../models/Scraped');
 var User = require('../models/user');
// Snatches HTML from URLs
var request = require("request");
// Scrapes our HTML
var cheerio = require("cheerio");



module.exports = {




saveScrapedNews: function(req, res){

    //**define "link" and userEmail variable first in button click, 
    //so this function can use them**  

//you can pass in a variable or an object to new article   
  var newArticle = new Article({link: link});

// Save the new Article in the articles collection
  newArticle.save(function(err, doc) {

    if (err) {
      res.send(err);
    }

    else {


    //  doc is a variable containing the document of the book we just saved,
    // calling doc._id will grab the id of the doc (the new article)

  //We need "{new: true}" in our call, or else query will return the object as it was before it was updated
      User.findOneAndUpdate(
       
        {"local.email": userEmail }), 

        { $push: { "savedArticles": doc._id } }, { new: true }, function(error, doc) {
        // Send any errors to the browser
        if (error) {
          res.send(error);
        }
        // Or send the doc to the browser
        else {
          res.send(doc);
        }
      };
    }
  });
},


grabScrapedList: function(req,res){


 Scraped.find({}, function(error, doc) {
    // Send an error message to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to the browser
    else {
      res.send(doc);
    }
  });


},



//pass the userEmail in the params
viewSaved: function(req, useremail, res){


    //**define "userEmail" variable first in button click, 
    //so this function can use them**  

console.log(userEmail);
//find the right user
User.findOne(

// query object
{"local.email": userEmail })

//populate their saved articles 
.populate("savedArticles")

.exec(function(error,doc){

    if (error){
        res.send(error);
    }

    //else send results to browser

    else{

//it's a doc for mongoDB. log it to see
        res.send(doc);





    }
})



},





postComment: function(req,res){





},




scrapeLatest: function(req,res){




console.log("scraping");


// Making a request call for reddit's "webdev" board. The page's HTML is saved as the callback's third argument
request("https://www.reddit.com/r/webdev", function(error, response, html){ 

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var result = [];

  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
  $("p.title").each(function(i, element) {

    // Save the text of the element (this) in a "title" variable. In this example the element is "this"
    var title = $(this).text();

    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have

   // *** //the below is unique syntax to Cheerio. wrapping the element object (which is this) and selecting
    var link = $(element).children().attr("href");

    // Save these results in an object that we'll push into the result array we defined earlier
   



console.log(link);


//you can pass in a variable or an object to new article   
  var newScraped = new Scraped({link: link});

// Save the new Article in the articles collection
  newScraped.save(function(err, doc) {

    if (err) {
      res.send(err);
    }

    else {

  res.send(doc);

  };



})


})

})

}, 




}


// =======================
//****Features COMING SOON****
// =======================


// removeArticle: function(req,res){


// // var _id = req.body.postId;
// //         Posts.remove({ _id }, function (err, doc){
// //             if (err) {
// //                 res.send('error');
// //             } else {
// //                 res.send('success');
// //             }
// //         });

// },





// removeComment: function(req, res){
//         // var id = req.body.commentId;
//         // comments.remove({ id },
//         //     function(err, doc){
//         //     if (err) {
//         //         res.send('error');
//         //     } else {
//         //         res.send('success');
//         //     }
//         // });
//     }




