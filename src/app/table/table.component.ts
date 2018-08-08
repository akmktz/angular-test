import {Component, OnInit, ViewChild} from '@angular/core';
import {ListService} from '../list.service';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ ListService ]
})
export class TableComponent implements OnInit {
  list = [];

  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource(this.list);

  constructor(private listService: ListService) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit () {
    this.listService.getList().subscribe(data => {
      this.list = data['list'];
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.sort = this.sort;
    });
  }

}
