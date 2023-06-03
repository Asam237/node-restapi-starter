import { CreateCommentInput } from "../../shared/types/models";
import { CommentModel } from "../models/comment.model";

const createComment = async (input: CreateCommentInput) => {
    return await CommentModel.create(input);
}

const oneComment = async (id: any) => {
    return await CommentModel.findOne({ _id: id })
}

const allComments = async () => {
    return await CommentModel.find({})
}

const destroyComment = async (id: any) => {
    return await CommentModel.deleteOne({ _id: id })
}

export default { createComment, oneComment, allComments, destroyComment }