import { Component, OnInit } from '@angular/core';
import { FoobservableService } from 'src/services/foobservable.service';

@Component({
  selector: 'app-foobservable-comp',
  templateUrl: './foobservable-comp.component.html',
  styleUrls: ['./foobservable-comp.component.scss']
})
export class FoobservableCompComponent implements OnInit {

  combinedData = ''

  constructor(foobservableService: FoobservableService) {

    foobservableService.foobservable().subscribe((chunk: any) => {

      console.log('chunk is: ', chunk)

      this.combinedData += chunk;
    })

  }

  ngOnInit(): void {

  }

}
