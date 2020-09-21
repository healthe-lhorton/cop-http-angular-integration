import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatFact, CatFactAllResponse, User } from './cat-fact.models';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CatFactService {
  constructor(public http: HttpClient) {}

  public getAllFacts(): Observable<CatFact[]> {
    return this.http
      .get<CatFactAllResponse>(environment.apiHost + 'facts')
      .pipe(map((res) => res.all));
  }

  public getUsers(): Observable<User[]> {
    return this.getAllFacts().pipe(
      map((facts) => facts.map((fact) => fact.user))
    );
  }
}
