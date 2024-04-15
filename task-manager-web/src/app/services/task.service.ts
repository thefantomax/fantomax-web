// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {
//   private BaseApiUrl = 'http://localhost:33300/api-v1/';

//   constructor(private http: HttpClient) { }

//   getTasks(userId: string): Observable<any[]> {
//     const url = `${this.BaseApiUrl}/${userId}/tasks-list`; 
//     return this.http.get<any[]>(url);
//   }

//   createTask(userId: string, taskData: any): Observable<any> {
//     const url = `${this.BaseApiUrl}/${userId}/createTask`;
//     return this.http.post<any>(url, taskData);
//   }

//   deleteTask(userId: string, taskId: string): Observable<any> {
//     const url = `${this.BaseApiUrl}/deleteTask/${taskId}`;
//     return this.http.delete<any>(url);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private BaseApiUrl = 'http://localhost:33300/api-v1/';

  constructor(private http: HttpClient) { }

  getTasks(userId: string): Observable<any[]> {
    const url = `${this.BaseApiUrl}/${userId}/tasks-list`; 
    return this.http.get<any[]>(url);
  }

  createTask(userId: string, taskData: any): Observable<any> {
    const url = `${this.BaseApiUrl}/${userId}/createTask`;
    return this.http.post<any>(url, taskData);
  }

  deleteTask(userId: string, taskId: string): Observable<any> {
    const url = `${this.BaseApiUrl}/deleteTask/${taskId}`;
    return this.http.delete<any>(url);
  }

  addTask(userId: string, taskData: any): Observable<any> {
    const url = `${this.BaseApiUrl}/${userId}/createTask`;
    return this.http.post<any>(url, taskData);
  }

  updateTask(userId: string,taskId: string, updatedTask: any): Observable<any> {
    const url = `${this.BaseApiUrl}/updateTask/${taskId}`;
    return this.http.put<any>(url, updatedTask);
  }

}
