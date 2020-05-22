import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoobservableService {

  constructor() { }

  public foobservable () {

    return from(['foo', 'bar', 'baz'])

  }

}
