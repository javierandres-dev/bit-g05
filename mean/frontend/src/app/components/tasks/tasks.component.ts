import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  constructor(
    public toastr: ToastrService,
    private jwtHelper: JwtHelperService,
    public taskService: TasksService
  ) {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  getUserName() {
    const token: any = localStorage.getItem('token');
    const decoded = this.jwtHelper.decodeToken(token);
    return decoded.name;
  }

  handleSubmitTask(form: NgForm) {
    if (form.value._id) {
      this.taskService.updateTask(form.value).subscribe(
        (res) => {
          form.reset();
          this.getAllTasks();
          this.toastr.success('Task updated', 'Success!');
        },
        (err) => {
          this.toastr.error(
            'An error ocurred, please try again later',
            'Error!'
          );
        }
      );
    } else {
      if (!form.value.name) {
        this.toastr.info('Task name is require', 'Info!');
      } else {
        this.taskService.createTask(form.value).subscribe(
          (res) => {
            form.reset();
            this.getAllTasks();
            this.toastr.success('Task created', 'Success!');
          },
          (err) => {
            this.toastr.error(
              'An error ocurred, please try again later',
              'Error!'
            );
          }
        );
      }
    }
  }

  getAllTasks() {
    this.taskService.readAllTasks().subscribe(
      (res) => {
        this.taskService.tasks = res.allTasks;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editTask(task: any) {
    this.taskService.selectedTask = task;
  }

  removeTask(id: string | any) {
    this.taskService.deleteTask(id).subscribe(
      (res) => {
        this.getAllTasks();
        this.toastr.success('Task deleted', 'Success!');
      },
      (err) => {
        this.toastr.error('An error ocurred, please try again later', 'Error!');
      }
    );
  }

  resetForm(form: NgForm) {
    form.reset();
    this.taskService.selectedTask = {
      name: '',
      completed: false,
    };
    this.getAllTasks();
  }
}
