import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks : Task[] = [];

  constructor() { }

  getAllTasks():Task[]{
    return this.tasks;
  }

  addTask(task:Task): void{
    this.tasks.push(task);
  }

  updateTask(task:Task): void{
    const index = this.tasks.findIndex(t => t.id === task.id);
    if(index!==1){
      this.tasks[index]=task;
    };
  }

  deleteTask(id: number): void{
    this.tasks = this.tasks.filter(t =>t.id !==id);
  }
}
