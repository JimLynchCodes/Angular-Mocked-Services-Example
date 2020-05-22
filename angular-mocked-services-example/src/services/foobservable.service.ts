import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoobservableService {

  constructor() { }

  public foobservable(): Observable<string>  {

    return from(['foo', 'bar', 'baz'])

  }

}
