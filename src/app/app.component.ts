import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angtest';
  list = [
      {
        name: 'aaaaa',
        marked: false,
      },
      {
        name: 'bbbbbbbbb',
        marked: false,
      },
      {
        name: 'cccccccccccc',
        marked: false,
      },
      {
        name: 'ddddddddddd',
        marked: false,
      }
  ];

  onClick(item): void {
      this.list.forEach((itm) => {
        itm.marked = false;
      });
      item.marked = true;
      console.log(item);
  }
}
