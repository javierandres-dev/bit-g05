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

  readTasks() {
    return this.http.get<any>(this.urlBackend);
  }

  updateTask(task: Task) {
    return this.http.put(`${this.urlBackend}/${task._id}`, task);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.urlBackend}/${id}`);
  }
}
