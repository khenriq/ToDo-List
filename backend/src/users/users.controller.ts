// users/user.controller.ts
import { Request, Response, Router } from "express";
import { UsersService } from "./users.service";

const usersService = new UsersService();
const router = Router();

//cadastro de usuario

router.post('/signup', (req: Request, res: Response): void => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({ message: "Nome e Senha São Obrigatórios" });
        return;
    }
    usersService.signup(username, password);
    res.status(201).send();
});
//login
router.post('/signin', (req: Request, res: Response): void => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({ message: "Nome e Senha São Obrigatórios" });
        return;
    }
    const isValid = usersService.signin(username, password);
    if (!isValid) {
        res.status(401).json({ message: "Credenciais inválidas" });
        return;
    }
    res.json({ message: "Login realizado com sucesso" });
});

export default router;




