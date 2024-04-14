import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{

  formvalue !: FormGroup;
  taskModelObject : Task = new Task();
  taskList !: any;
  constructor(private FormBuilder : FormBuilder, private taskservice : TaskService){}

  ngOnInit(): void {
    this.formvalue = this.FormBuilder.group({
      titre : [''],
      etat : [''],
      description : [''],
      dateCreation : ['']
    })
    this.getAllTask();
  }

  postTaskDetails(){
    this.taskModelObject.titre = this.formvalue.value.titre;
    this.taskModelObject.etat = this.formvalue.value.etat;
    this.taskModelObject.description = this.formvalue.value.description;
    this.taskModelObject.dueDate = this.formvalue.value.dueDate;

    this.taskservice.postTask(this.taskModelObject)
    .subscribe((res) =>{
      console.log(res);
      alert("Tache ajoutée avec succes");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formvalue.reset();
    }),
    (err : any)=>{
      console.log(err);
      alert("oups probleme lors de l'ajout")
    }
  }

  getAllTask(){
    this.taskservice.getAllTask()
    .subscribe(res=>{
      this.taskList = res;
    })
  }
}
