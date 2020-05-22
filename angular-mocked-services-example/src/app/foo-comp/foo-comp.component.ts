import { Component, OnInit } from '@angular/core';
import { FooService } from 'src/services/foo.service';

@Component({
  selector: 'app-foo-comp',
  templateUrl: './foo-comp.component.html',
  styleUrls: ['./foo-comp.component.scss']
})
export class FooCompComponent implements OnInit {

  magicWord: string

  constructor(fooService: FooService) { 

    this.magicWord = fooService.foo();

  }

  ngOnInit(): void {
  }

}
