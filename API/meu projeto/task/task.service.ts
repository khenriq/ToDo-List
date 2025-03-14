// tasks/tasks.service.ts
export const tasksList = [
    { id: "1", description: "Ir ao supermercado" },
    { id: "2", description: "Treinar na academia" },
    { id: "3", description: "Fazer Yoga" },
    { id: "4", description: "Visitar aos amigos" }
 ];
 
 export class TaskService {
    getAllTasks() {
       return tasksList;
    }
 }
