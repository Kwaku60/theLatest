
//function to scrape the latest and append to page. This will be linked to the onClick
//of "#get-the-latest" button.
var userEmail;

$("#get-the-latest").on("click", scrapeLatest);



function scrapeLatest(){


// Dependencies:

// Snatches HTML from URLs
var request = require("request");
// Scrapes our HTML
var cheerio = require("cheerio");





// Making a request call for reddit's "webdev" board. The page's HTML is saved as the callback's third argument
request("https://www.reddit.com/r/webdev", function(error, response, html) {

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
   

   //use the thumbnail api before appending this link 

   var linkHold = $("<div>");
   linkHold.addClass("link-hold");
   linkHold.id = "link-hold-" + i;
   linkHold.append(link);
var save =$("<button>");
save.text = "Save me!";
save.addClass("save");
save.id = "save-btn-" + i;

var articleContain = $("<div>");
articleContain.addClass("article-container");
articleContain.append(linkHold);

$("#article-listing").append(articleContain);

console.log(link);


  });




});


};




//saving functionality

$(".save").on("click", function(){

var buttonId = this.id;
console.log(buttonId);

//get id of button, which is the same as the id of the div holding the link
     IdValue = buttonId.slice(9);

relevantArticleDiv = $("#link-hold-" + IdValue);

var link = relevantArticleDiv.innerHtml();
console.log(link);


//userEmail must be defined for it to be used within the following api call

console.log(userEmail)

//api call

 $.post("/save").then(function(data) {

  // alternatively try passing them in
   // $.post("/save", articleController.saveScrapedNews(userEmail, link)).then(function(data) {


console.log("saved!");
//end of save post request
  });


//end of save onClick
})




$("#view-my-saved").on("click", function(){

  console.log(userEmail);

});





