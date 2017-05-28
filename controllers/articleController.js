module.exports = {



saveScrapedNews: function(req,res){




}






//pass the userEmail in the params
viewSaved: function(req, userEmail, res){

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

    }
})



}




removeArticle: function(req,res){




}



postComment: function(req,res){


}


removeComment: function(req, res){
        var id = req.body.commentId;
        comments.remove({ id },
            function(err, doc){
            if (err) {
                res.send('error');
            } else {
                res.send('success');
            }
        });
    },







}
