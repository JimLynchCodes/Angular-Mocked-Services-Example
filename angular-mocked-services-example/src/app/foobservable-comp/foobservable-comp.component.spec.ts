import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoobservableCompComponent } from './foobservable-comp.component';
import { FoobservableService } from 'src/services/foobservable.service';
import { MockFoobservableService, fakeDataStream } from 'src/mocks/MockFoobservableService';

describe('FoobservableCompComponent', () => {
  let component: FoobservableCompComponent;
  let fixture: ComponentFixture<FoobservableCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoobservableCompComponent ],
      providers: [{provide: FoobservableService, useClass: MockFoobservableService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoobservableCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have combinedData equal to the combined chunks from the foobservable', () => {

    expect(component.combinedData).toBe('something')
    
    expect(component.combinedData).toBe(fakeDataStream.join(''))

  })

});
