import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {ListService} from '../../list.service';
import {AjaxItem} from '../../ajax-item';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnInit {
  id: number;
  item: object;

  constructor(private router: Router, private route: ActivatedRoute, private listService: ListService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);

      this.listService.getItem(this.id).subscribe((data: AjaxItem) => {
        this.item = data.item;
        console.log(this.item);
      });
    });
  }

  onClick(): void {
    this.router.navigate(['/table']);
  }

}
