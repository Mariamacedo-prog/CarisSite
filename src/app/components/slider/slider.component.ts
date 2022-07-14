import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Result} from './result';
import { DataService } from '../../data.service';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliderArray: any[];
  transform: number;
  selectedIndex = 0;

  constructor(private data: DataService) {
    this.sliderArray = [];
    this.selectedIndex = 0;
    this.transform = 100;
  }

   ngOnInit() {
     this.data.getData().subscribe((result: any) => {
      this.sliderArray = result.sliderArray;
      console.log(result)
    });
  }

  selected(x: any) {
    this.downSelected(x);
    this.selectedIndex = x;
   }

   keySelected(x: any) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

   downSelected(i: any) {
   this.transform =  100 - (i) * 50;
     this.selectedIndex = this.selectedIndex + 1;
     if (this.selectedIndex > 4) {
       this.selectedIndex = 0;
     }
   }


}
