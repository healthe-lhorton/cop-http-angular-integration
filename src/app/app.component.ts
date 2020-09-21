import { Component, ViewEncapsulation } from '@angular/core';
import { CatFactService } from './cat-fact.service';
import { Observable } from 'rxjs';
import { CatFactTableItem, SelectOption, User } from './cat-fact.models';
import { map } from 'rxjs/operators';
import { uniqBy } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'cop-webcall-demo';

  userOptions$: Observable<
    SelectOption<string>[]
  > = this.catFactService.getUsers().pipe(
    map((users: User[]) =>
      // Only get unique users by id
      uniqBy(users, '_id')
        // Filter out undefined
        .filter((user) => !!user)
        // Convert to Select Option
        .map((user) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user._id,
        }))
    )
  );

  tableData$: Observable<
    CatFactTableItem[]
  > = this.catFactService.getAllFacts();

  userSelectionChange(id: string): void {
    this.tableData$ = this.catFactService
      .getAllFacts()
      .pipe(
        map((facts) =>
          facts.filter((fact) => fact.user && fact.user._id === id)
        )
      );
  }

  constructor(public catFactService: CatFactService) {}
}
