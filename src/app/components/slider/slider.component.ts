import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Result} from './result';
import { DataService } from '../../data.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliderArray = [];
  transform: number;
  selectedIndex = 0;
  activeIndex = 1; // start with the second one, rather than first, first is 0 index
  slides = [
    {
      image: 'assets/my-slide-images/first-image.png',
      label: 'First slide label',
      content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      alt: 'my first slide image'
    }
  //...
  ];

  constructor(private data: DataService, config: NgbCarouselConfig) {
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
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


}
