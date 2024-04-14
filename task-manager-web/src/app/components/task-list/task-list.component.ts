// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-task-list',
//   templateUrl: './task-list.component.html',
//   styleUrls: ['./task-list.component.css']
// })
// export class TaskListComponent {

// }

// task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    { id: 1, titre: 'course', description: 'course de la semaine', dueDate: new Date(), etat: false },
    { id: 2, titre: 'test', description: 'test', dueDate: new Date(), etat: false },
    { id: 3, titre: '', description: '', dueDate: new Date(), etat: false }
  ];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getAllTasks();
  }
}
