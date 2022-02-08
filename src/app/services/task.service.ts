import { Injectable } from '@angular/core';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';

import { Observable, observable, of} from 'rxjs';

import {HttpClient, HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  // getTask(): Task[] {
  //   return TASKS;
  // }

  //method 2, this is like a promise
  getTask(): Observable<Task[]>{
    // const tasks = of(TASKS);
    // return tasks;

    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task:Task) : Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
}
