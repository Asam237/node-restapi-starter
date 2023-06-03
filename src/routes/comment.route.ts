import { Router } from "express";
import * as commentController from "../controllers/comment.controller"

const CommentRoute = () => {
    const router = Router()
    const prefix: string = "/comments"
    router.post(`${prefix}/create`, commentController.createCommentController)
    router.get(`${prefix}`, commentController.allCommentController)
    router.get(`${prefix}/:id`, commentController.oneCommentController)
    router.delete(`${prefix}/:id`, commentController.deleteCommentController)
    return router
}

export { CommentRoute }