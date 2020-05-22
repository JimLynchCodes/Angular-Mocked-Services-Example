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

    it('should return chunks of 3 characters', () => {
      service.foobservable().subscribe( chunk => {
        expect(chunk.length).toBe(3);
      })
    })


  })

});
