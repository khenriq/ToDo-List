// tasks/tasks.controller.ts
import { Request, Response, Router } from "express";
import { TaskService } from "./task.service";

const taskService = new TaskService();
const router = Router();

router.get("/task", async (req: Request , res: Response) => {c
   const tasks = taskService.getAllTasks();
   return res.status(200).json(tasks);
});

export default router;







