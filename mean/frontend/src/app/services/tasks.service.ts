import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/schemas';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  tasks: Task[] = [];

  urlBackend = 'http://localhost:4000/tasks';

  createTask() {
    console.log('createTask...');
  }
  readAllTasks() {
    return this.http.get<any>(this.urlBackend);
  }
  readTask() {
    console.log('readTask...');
  }
  updateTask() {
    console.log('updateTask...');
  }
  deleteTask() {
    console.log('deleteTask...');
  }
}
