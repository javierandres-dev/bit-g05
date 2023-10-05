import { Component } from '@angular/core';
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
}
