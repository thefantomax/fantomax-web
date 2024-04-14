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
}
