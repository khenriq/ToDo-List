interface User {
    username: string;
    password: string;
}

export class UsersService {
    private users: User[] = [];

    signup(username: string, password: string): void {
        this.users.push({ username, password });
    }

    signin(username: string, password: string): boolean {
        return this.users.some(user => 
            user.username === username && user.password === password
        );
    }
}



