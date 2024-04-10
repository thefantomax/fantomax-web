// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-add-task',
//   templateUrl: './add-task.component.html',
//   styleUrls: ['./add-task.component.css']
// })
// export class AddTaskComponent {

// }

// add-task.component.ts
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task: Task = { id: 0, title: '', description: '', dueDate: new Date(), completed: false };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addTask(): void {
    this.taskService.addTask(this.task);
    this.task = { id: 0, title: '', description: '', dueDate: new Date(), completed: false };
  }
}

