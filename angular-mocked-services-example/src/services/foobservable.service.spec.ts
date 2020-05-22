import { TestBed } from '@angular/core/testing';

import { FoobservableService } from './foobservable.service';

describe('FoobservableService', () => {
  let service: FoobservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoobservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('foobservable function', () => {

    describe('observable it returns', () => {

      it('should should be')

    })

    it('should return "foo", "bar", and "baz""', () => {

      let chunks = []

      service.foobservable().subscribe(chunk => {


        chunks.push(chunk)

      })

      expect(chunks.join('')).toBe("foobarbaz")
    })


  })

});
