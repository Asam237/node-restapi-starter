import { Router } from "express"
import { TaskController } from "../controllers/task.controller";
import Validator from "../validator";
import taskValidator from "../validator/task.validator";

const { task }: any = Validator.method

class TaskRoute {
    public router: Router;
    constructor() {
        this.router = Router()
        this.routes()
    }
    routes = () => {
        const prefix: string = "tasks"
        this.router.post(`${prefix}/create`, taskValidator.validate(task.createTask),
            TaskController.create
        )
    }
}

export { TaskRoute }