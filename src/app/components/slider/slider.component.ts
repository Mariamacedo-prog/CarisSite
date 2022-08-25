import { Component, OnInit, Input} from '@angular/core';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() images: any[] = [];
  @Input() controls = true;
  @Input() heightSlider: number = 400;
  @Input() mouseInImage = false;
  @Input() arrowRight = "";
  
  itemAtual = 0;
  seeItemvalue = 0;
  scrollX = 0;
  selectedIndex = 0;
  handleLeftArrow (){

    if(this.itemAtual <= this.images.length  && this.itemAtual !== 0){
      this.itemAtual--;
    }else{
      this.itemAtual = 0;
    }
  };



  seeItem(item: number){
    this.seeItemvalue = item
  }

  handleRightArrow (){
    if(this.itemAtual >= 0 && this.itemAtual <= this.images.length - 1){
      this.itemAtual++
    }else{
      this.itemAtual = this.images.length - 1;
    }
  };
  logTouchstart(event:any){
    for (let i = 0; i < event.changedTouches.length; i++) {
      if(event.changedTouches[i].clientX < 100){
        this.handleLeftArrow ()
      }
      if(event.changedTouches[i].clientX > 271){
        this.handleRightArrow ()
      }
    }
  }

  constructor() { }

  ngOnInit(): void {

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
