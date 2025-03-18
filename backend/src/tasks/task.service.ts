// tasks/tasks.service.ts
interface Task {
   id: string;
   description: string;
}

export class TaskService {
   private tasks: Task[] = [
      { id: "1", description: "Ir ao supermercado" },
      { id: "2", description: "Treinar na academia" },
      { id: "3", description: "Fazer Yoga" },
      { id: "4", description: "Visitar aos amigos" }
   ]

   getAllTasks() {
      return this.tasks;
   }

   getTaskById(id: string) {
      return this.tasks.find(task => task.id === id);
   }

   createTask(description: string) {
      const newTask: Task = {id: String(this.tasks.length + 1), description};
      this.tasks.push(newTask);
      return newTask;
   }

   updateTask(id: string, description: string) {
      const task = this.tasks.find(task => task.id === id);
      if (!task) return null;
      task.description = description;
      return task;
   }
   deleteTask(id: string) {
      const taskIndex = this.tasks.findIndex(task => task.id === id);
      if (taskIndex === -1) return null;
      const [deletedTask] = this.tasks.splice(taskIndex, 1);
      return deletedTask;

   }




}
