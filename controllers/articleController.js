module.exports = {



saveScrapedNews: function(req, res){

    //**define "link" and userEmail variable first in button click, 
    //so this function can use them**  

//you can pass in a variable or an object to new article   
  var newArticle = new Article(link);

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
}






//pass the userEmail in the params
viewSaved: function(req, res){


    //**define "userEmail" variable first in button click, 
    //so this function can use them**  


//find the right user
user.findOne(

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
console.log(doc);

// append saved articles to page
$("#saved-articles").append(doc);

    }
})



}





postComment: function(req,res){





},









// =======================
//****Features COMING SOON****
// =======================


removeArticle: function(req,res){


// var _id = req.body.postId;
//         Posts.remove({ _id }, function (err, doc){
//             if (err) {
//                 res.send('error');
//             } else {
//                 res.send('success');
//             }
//         });

},





removeComment: function(req, res){
        // var id = req.body.commentId;
        // comments.remove({ id },
        //     function(err, doc){
        //     if (err) {
        //         res.send('error');
        //     } else {
        //         res.send('success');
        //     }
        // });
    },

}
