import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  taskForm: FormGroup;
  userId: string | undefined;

  constructor(private taskService: TaskService, private router: Router, private formBuilder: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.userId = navigation.extras.state['user']?.id; // Utilisation de la vérification de nullité (?)
    }

    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      state: false
    });
  }

  onSubmit(): void {
    if (this.userId && this.taskForm.valid) { // Vérification de nullité pour userId
      const formData = this.taskForm.value;
      this.taskService.createTask(this.userId, formData).subscribe({
        next: () => {
          console.log('Tâche créée avec succès.');
          //this.router.navigate(['/taskList']);
          this.router.navigate(['/taskList'], { state: { user: { id: this.userId } } });
        },
        error: (error) => {
          console.error('Erreur lors de la création de la tâche :', error);
        }
      });
    }
  }
}
