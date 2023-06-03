import mongoose from "mongoose";

const commentSchema: mongoose.Schema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }
})

const CommentModel = mongoose.model("Comment", commentSchema)
const commentUpdateParams: string[] = ["comment"]

export { CommentModel, commentUpdateParams }