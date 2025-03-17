import express, { Request, Response } from "express";
import taskRouter from './tasks/task.controller.ts';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoints de Tasks
app.use('/tasks', taskRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor rodando com TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
