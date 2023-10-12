import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  urlImg = '';

  outData = {
    date: '',
  };

  handleSubmit() {
    console.log('outData:', this.outData);
    console.log('urlImg:', this.urlImg);
  }

  inData = {
    date: '2023-10-11T00:00:00.000Z',
    formattedDate: this.getFormattedDate('2023-10-11T00:00:00.000Z'),
  };

  getFormattedDate(date: string) {
    //console.log(typeof date);
    let fd: any = new Date(date);
    //console.log(typeof fd);
    fd = fd.toLocaleString();
    return fd;
  }
}
