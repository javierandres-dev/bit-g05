import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public homeService: HomeService) {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  /* addTask(form: NgForm) {
    this.homeService.createTask(form.value).subscribe(
      (res) => {
        this.getAllTasks();
        console.log('res:', res);
      },
      (err) => {
        console.log('err:', err);
      }
    );
  } */

  getAllTasks() {
    this.homeService.readTasks().subscribe(
      (res) => {
        this.homeService.tasks = res.allTasks;
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }

  editTask(task: any) {
    this.homeService.selectedTask = task;
  }

  removeTask(id: string | any) {
    this.homeService.deleteTask(id).subscribe(
      (res) => {
        this.getAllTasks();
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }

  handleSubmitTask(form: NgForm) {
    if (form.value._id) {
      this.homeService.updateTask(form.value).subscribe(
        (res) => {
          form.reset();
          this.getAllTasks();
          console.log('res:', res);
        },
        (err) => {
          console.log('err:', err);
        }
      );
    } else {
      this.homeService.createTask(form.value).subscribe(
        (res) => {
          form.reset();
          this.getAllTasks();
          console.log('res:', res);
        },
        (err) => {
          console.log('err:', err);
        }
      );
    }
  }
}
