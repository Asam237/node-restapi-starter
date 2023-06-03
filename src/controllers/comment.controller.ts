import { Request, Response } from "express";
import { TaskModel } from "../domain/models/task.model";
import commentService from "../domain/services/comment.service";
import { CreateCommentInput } from "../shared/types/models";

const createCommentController = async (req: Request, res: Response) => {
    const { comment }: CreateCommentInput = req.body
    const task = await TaskModel.findById({ _id: req.body.task })
    const createComment = await commentService.createComment({
        comment,
        task
    })
    task?.comments.push(createComment._id)
    await task?.save()
    await createComment.save()
    return res.status(200).json({ comment: createComment })
}

const deleteCommentController = async (req: Request, res: Response) => {
    await commentService.destroyComment(req.params.id)
    return res.status(200).json({ messsage: "Comment delete success !" })
}

const allCommentController = async (req: Request, res: Response) => {
    const comments = await commentService.allComments()
    return res.status(200).json({ comments })
}

const oneCommentController = async (req: Request, res: Response) => {
    await commentService.destroyComment(req.params.id)
    res.status(200).json({ message: "Comment delete success !" })
}

export { createCommentController, deleteCommentController, allCommentController, oneCommentController }