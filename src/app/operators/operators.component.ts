import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

  onClick(item): void {
      this.list.forEach((itm) => {
          itm.marked = false;
      });
      item.marked = true;
      console.log(item);
  }

}
