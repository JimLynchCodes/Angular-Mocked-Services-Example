import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooCompComponent } from './foo-comp.component';
import { FooService } from 'src/services/foo.service';
import { MockFooService } from 'src/mocks/MockFooService';

describe('FooCompComponent', () => {
  let component: FooCompComponent;
  let fixture: ComponentFixture<FooCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooCompComponent ],
      providers: [{provide: FooService, useClass: MockFooService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should set magic word to the value that fooService.foo returns', () => {

    expect(component.magicWord).toBe('bar');

  });


});
