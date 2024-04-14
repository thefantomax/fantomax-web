// task.model.ts
// export interface Task {
//     id: number;
//     title: string;
//     description: string;
//     dueDate: Date;
//     completed: boolean;
//   }
  
export class Task {
  id: number = 0;
  titre: string = '';
  description: string = '';
  dueDate: Date = new Date();
  etat: boolean = false ;
}
