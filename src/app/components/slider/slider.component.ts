import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Result} from './result';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private data: DataService) {

  }

   ngOnInit() {
     this.data.getData().subscribe((result: any) => {
  
      console.log(result)
    });
  }
  
}
