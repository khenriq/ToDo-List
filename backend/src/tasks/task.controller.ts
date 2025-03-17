// tasks/tasks.controller.ts
import { Request, Response, Router } from "express";
import { TaskService } from "./task.service.ts";

const taskService = new TaskService();
const router = Router();

router.get("/", (req: Request, res: Response) => {
   const tasks = taskService.getAllTasks();
   res.status(200).json(tasks);
});

export default router;







