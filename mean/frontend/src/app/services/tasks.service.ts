import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/schemas';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  tasks: Task[] = [];
  selectedTask: Task = {
    name: '',
    completed: false,
  };
  urlBackend = 'http://localhost:4000/tasks';

  createTask(task: Task) {
    return this.http.post(this.urlBackend, task);
  }
  readAllTasks() {
    return this.http.get<any>(this.urlBackend);
  }
  updateTask(task: Task) {
    return this.http.put(`${this.urlBackend}/${task._id}`, task);
  }
  deleteTask(id: string) {
    return this.http.delete(`${this.urlBackend}/${id}`);
  }
}
