import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks : Task[] = [];

  constructor(private http : HttpClient) { }
  postTask(data : any) : Observable <any>{
    return this.http.post<any>("/:uid/createTask',isAuthenticated ,express.json(), taskController.createTask",data)
    .pipe(map((res:any) =>{
      return res
    }))
  }

  getAllTask(){
    return this.http.get<any>("'/:uid/tasks-list', isAuthenticated, express.json(), taskController.getListTasks")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateTask(data : any, id: number){
    return this.http.put<any>("'/udpateTask/:taskId', isAuthenticated, express.json(), taskController.updateTask",+id,data)
    .pipe(map((res : any)=>{
      return res;
    }))
  }

  deleteTask(id : number){
    return this.http.delete<any>("'/deleteTask/:taskId', isAuthenticated, taskController.deleteTask"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }




  //je ne m'occupe pas de ces fonctions pour le moment
  
  // getAllTasks():Task[]{
  //   return this.tasks;
  // }

  // addTask(task:Task): void{
  //   this.tasks.push(task);
  // }

  // updateTask(task:Task): void{
  //   const index = this.tasks.findIndex(t => t.id === task.id);
  //   if(index!==1){
  //     this.tasks[index]=task;
  //   };
  // }

  // deleteTask(id: number): void{
  //   this.tasks = this.tasks.filter(t =>t.id !==id);
  // }
}
