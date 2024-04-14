import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  user: any;
  tasks: any[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = history.state.user;
    console.log(this.user);
    if (!this.user || !this.user.id) {
      this.router.navigate(['/connexion']);
    } else {
      this.getTasks(this.user.id);
    }
  }

  getTasks(userId: string): void {
    this.taskService.getTasks(userId).subscribe(
      tasks => {
        this.tasks = tasks;
        console.log(tasks);
      },
      error => {
        if (error.status === 401) {
          this.router.navigate(['/connexion']);
        } else {
          console.error('Une erreur s\'est produite : ', error);
        }
      }
    );
  }
}

