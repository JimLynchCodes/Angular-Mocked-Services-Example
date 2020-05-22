import { Injectable } from '@angular/core';

@Injectable()    
  export class MockFooService {
  
    constructor() { }
  
    public foo() {
      return 'bar';
    }
  
  }