import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required:"Text is required"
    }, 
    creatAT: {
        type: Date,
        default: Date.now
    },
   
});

const model = mongoose.model("Comment", commentSchema);
export default model;