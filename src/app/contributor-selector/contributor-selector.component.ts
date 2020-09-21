import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectOption } from '../cat-fact.models';

@Component({
  selector: 'app-users-selector',
  templateUrl: './contributor-selector.component.html',
  styleUrls: ['./contributor-selector.component.css'],
})
export class ContributorSelectorComponent implements OnInit {
  @Input()
  userOptions$: Observable<SelectOption<string>[]>;

  @Output()
  userOptionChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
