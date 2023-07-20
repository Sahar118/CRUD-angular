import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of} from 'rxjs'
import { Task } from '../Task';

const httpOption ={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private httpUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{

    return this.http.get<Task[]>(this.httpUrl)
    
  }

  DeleteTask(task:Task):Observable<Task>{
    const url = `${this.httpUrl}/${task.id}`;
    return this.http.delete<Task>(url)
  }

  ChangeReminderBtn(task:Task):Observable<Task>{
    const url = `${this.httpUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOption)
  }

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.httpUrl, task, httpOption)
  }
}
