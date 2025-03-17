import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para JSON

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor rodando com TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
