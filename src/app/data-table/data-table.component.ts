import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFactTableItem } from '../cat-fact.models';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @Input()
  tableData$: Observable<CatFactTableItem[]>;
  displayedColumns = ['text', 'type', 'upvotes'];

  constructor() {}

  ngOnInit(): void {}
}
