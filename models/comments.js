var commentsSchema = mongoose.Schema({


    userName: {
        type: String,
        trim: true,
        required: 'String is required',
    },


    commentBody: {
        type: String,
        trim: true,
        required: 'String is required',
    },

});
