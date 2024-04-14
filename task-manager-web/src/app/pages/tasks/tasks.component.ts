import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  user!: any;
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

  deleteTask(taskId: string): void {
    this.taskService.deleteTask(this.user.id, taskId).subscribe(
      () => {
        console.log('Tâche supprimée avec succès.');
        // Rafraîchir la liste des tâches après la suppression si nécessaire
        this.getTasks(this.user.id);
      },
      error => {
        console.error('Erreur lors de la suppression de la tâche : ', error);
        // Gérer l'erreur ou afficher un message d'erreur à l'utilisateur
      }
    );
}


  navigateToCreateTask(): void {
    const user = { id: this.user.id };
    this.router.navigate(['/create-task'], { state: { user } });
  }
}
