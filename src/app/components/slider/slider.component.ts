import { Component, OnInit, Input} from '@angular/core';
import {Result} from './result';
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
  itemAtual = 0;
  seeItemvalue = 0;
  scrollX = 0;
  selectedIndex = 0;
  handleLeftArrow (){
    // let x = scrollX + Math.round(window.innerWidth / 3);
    // if (window.innerWidth  > x) {
    //   if( this.scrollX < 0){
    //     this.scrollX = (this.scrollX + x);
    //     if(this.selectedIndex === 0){
    //       this.selectedIndex = this.images.length - 1;
    //     }else{
    //       this.selectedIndex--;
    //     }
    //   }
    // }
    if(this.itemAtual <= this.images.length){
      this.itemAtual--;
    }else{
      this.itemAtual = 0;
    }
  };

  seeItem(item: number){
    this.seeItemvalue = item
  }

  handleRightArrow (){
    // let x = scrollX - Math.round(window.innerWidth / 3);
    // let listW = this.images.length * 600;
    // console.log(this.scrollX, (window.innerWidth - listW), this.images.length * 600)
    // if (window.innerWidth - listW >= this.scrollX) {
    //   this.scrollX = window.innerWidth - listW + 60;
    // }else{
    //   this.scrollX = this.scrollX + x;
    //   if(this.selectedIndex === this.images.length - 1){
    //     this.selectedIndex = 0;
    //   }else{
    //     this.selectedIndex ++;
    //   }
    // }
    
    if(this.itemAtual >= 0){
      this.itemAtual++
    }else{
      this.itemAtual = 0;
    }


  };


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
