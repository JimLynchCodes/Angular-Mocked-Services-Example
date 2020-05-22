import { TestBed } from '@angular/core/testing';

import { FooService } from './foo.service';

describe('FooService', () => {
  let service: FooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  describe('foo function',  () => {

    it('should return the string "foo"', () => {

      expect(service.foo()).toEqual('foo')               

    })

  })


});
