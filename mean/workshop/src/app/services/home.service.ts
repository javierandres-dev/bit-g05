import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/schema';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  urlBackend = 'http://localhost:4000/tasks';
  tasks: Task[] = [];
  selectedTask: Task = {
    name: '',
    completed: false,
  };

  createTask(task: Task) {
    return this.http.post(this.urlBackend, task);
  }
  readTasks() {}
  updateTask() {}
  deleteTask() {}
}
