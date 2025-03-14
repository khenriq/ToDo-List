// tasks/tasks.controller.ts
import { Request, Response, Router } from "express";
import { TaskService } from "./task.service";

const taskService = new TaskService();
const router = Router();

router.get("/task", (req: Request , res: Response) => {
   const tasks = taskService.getAllTasks();
   return res.status(200).json(tasks);
});

export default router;







