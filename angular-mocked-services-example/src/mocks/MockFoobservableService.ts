import { Injectable } from '@angular/core';
import { from } from 'rxjs';

export const fakeDataStream = ['som', 'eth', 'ing']

@Injectable()    
  export class MockFoobservableService {
  
    constructor() { }
  
    public foobservable() {
      return from(fakeDataStream);
    }
  
  }