const mongoose = require("mongoose");

const studentSchma = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    institute: {
        type: String,
        enum: ["playhouse", "school", "collage", "c.e.c"],
    
    },
    board: {
        type: String,
        enum:["GSAB","CBSE"],
    },
    subject: {
        type: String,
    }

},{timestamps:true})

const Student = mongoose.model("Student", studentSchma);

module.exports = Student