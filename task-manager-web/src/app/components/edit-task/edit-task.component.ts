// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-edit-task',
//   templateUrl: './edit-task.component.html',
//   styleUrls: ['./edit-task.component.css']
// })
// export class EditTaskComponent {

// }


// edit-task.component.ts
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task: Task = { id: 0, titre: '', description: '', dueDate: new Date(), etat: false };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  updateTask(): void {
    this.taskService.updateTask(this.task);
  }
}
