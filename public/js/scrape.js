

// Dependencies:



//function to scrape the latest and append to page. This will be linked to the onClick
//of "#get-the-latest" button.
var userEmail;



$("#get-the-latest").on("click", function(){


 $.get("/grabScrapedList").then(function(data) {

for(var i = 0; i++; i<12){



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







//end of for loop
}



//end of api request
});

//end of onClick
});





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
//end of save post 
  });


//end of save onClick
})




$("#view-my-saved").on("click", function(){

  console.log(userEmail);

});





