const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
     
    },
    author: {
      type: String,
      required: true,
      
    },
    description: {
      type: String,
      
    },
    coverImage:{
        type:String,
    },
    price: {
      type: Number,
      required: true,
    },
    publishedDate: {
      type: Date,
      required: false,
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
