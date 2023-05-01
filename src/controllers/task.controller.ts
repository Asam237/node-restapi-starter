import {Request, Response, NextFunction} from "express"
import { TaskModel } from "../models/task.model"

class TaskController {
    public static async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const {title, description, user}: any = req.body
            const taskParams: any = {title, description, user}
            const task: any = new TaskModel(taskParams)
            await task.save
            return res.status(200).json({task})

        } catch(error) {
            console.log(error)
        }
    }
}

export {TaskController}