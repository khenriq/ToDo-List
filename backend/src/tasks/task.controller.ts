// tasks/tasks.controller.ts
import { Request, Response, Router } from "express";
import { TaskService } from "./task.service";

const taskService = new TaskService();
const router = Router();

router.get("/", (_req: Request, res: Response): void => {
  const tasks = taskService.getAllTasks();
  res.status(200).json(tasks);
});

router.get("/:id", (req: Request, res: Response): void => {
  const task = taskService.getTaskById(req.params.id);
  if (!task) {
    res.status(404).json({menssage: "Tarefa Não Encontrada"});
    return;
  }
  res.json(task);
});

router.post("/", (req: Request, res: Response): void => {
  const { title, description } = req.body;
  if (!title) {
    res.status(400).json({ message: "Título é obrigatório" });
    return;
  }
  const newTask = taskService.createTask(title);
  res.status(201).json(newTask);
});

router.put("/:id", (req: Request, res: Response): void => {
  const updatedTask = taskService.updateTask(req.params.id, req.body);
  if (!updatedTask) {
    res.status(404).json({menssage: "tarefa não encontrada1" });
    return;
  }
  res.json(updatedTask);
});

router.delete("/:id", (req: Request, res: Response): void => {
  const deleteTask = taskService.deleteTask(req.params.id);
  if (!deleteTask) {
    res.status(404).json({menssage: "tarefa não encontrada" });
    return;
  }
  res.json({ message: "Tarefa Removida Com Sucesso" });
});

export default router;
