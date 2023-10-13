import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private tasksService: TasksService
  ) {}

  currentTask = {
    _id: '',
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      const taskId = param['id'];
      //console.log('taskId:', taskId);
      this.getTask(taskId);
    });
  }

  getTask(id: string) {
    this.tasksService.readTask(id).subscribe(
      (res) => {
        //console.log('res:', res);
        this.currentTask._id = res.task;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
