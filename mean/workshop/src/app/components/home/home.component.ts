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
  addTask(form: NgForm) {
    this.homeService.createTask(form.value).subscribe(
      (res) => {
        console.log('res:', res);
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }
}
