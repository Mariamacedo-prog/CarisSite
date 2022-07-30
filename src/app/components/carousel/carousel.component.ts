import { Component, OnInit, Input} from '@angular/core';


interface carouselImage {
  img: string;
  alt: string;
  text: any;
} 

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() textCenter = true;
  @Input() autoSlide = false;
  @Input() setIntervalTime = 3000;


  selectedIndex = 0;
  constructor() { }

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages()
    }
  }

  autoSlideImages(): void{
    setInterval(() => this.onNextClick(), this.setIntervalTime)
  }

  selectItem(index: number): void{
    this.selectedIndex = index;
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    }else{
      this.selectedIndex --;
    }
  }

  onNextClick(): void{
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex ++;
    }
  }
}
