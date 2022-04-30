import { Injectable } from '@angular/core';
import {Task} from '../task';
import {TASKS} from '../mock-tasks';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {"headers": new HttpHeaders({
  "Content-Type" :"application/json"
})}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = "http://localhost:5000/tasks";
  constructor(private http:HttpClient) { 
  }

  getTasks() :Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }
  deleteTask(task: Task) : Observable<Task> {
    return this.http.delete<Task>(`${this.url}/${task.id}`);
  }

  updateTask(task:Task) : Observable<Task> {
    task.reminder = !task.reminder;
    return this.http.put<Task>(this.url+"/"+task.id,task,httpOptions)
  }

  addTask(task:Task):Observable<Task> {
    return this.http.post<Task>(this.url,task,httpOptions);
  }
}
