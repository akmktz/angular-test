import {Router} from '@angular/router';
import {ListService} from '../../list.service';
import {AjaxList} from '../../ajax-list';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ ListService ]
})

export class TableComponent implements OnInit {
  list = [];

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource(this.list);

  constructor(private router: Router, private listService: ListService) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit () {
    this.listService.getList().subscribe((data: AjaxList) => {
      this.list = data['list'];
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.sort = this.sort;
    });
  }

  onClick (item): void {
      this.router.navigate(['/table_item', item.id]);
  }

}
