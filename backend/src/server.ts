import express, { Request, Response } from "express";
import taskRouter from './tasks/task.controller';
import userRouter from './users/users.controller';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoints de Tasks
app.use('/tasks', taskRouter);

// Endpoints de Users
app.use('/users', userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor rodando com TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});