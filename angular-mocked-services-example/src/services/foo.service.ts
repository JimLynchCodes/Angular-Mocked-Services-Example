import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})    
export class FooService {

  constructor() { }

  public foo() {
    return 'foo';
  }

}
