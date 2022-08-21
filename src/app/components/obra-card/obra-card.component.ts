import { Component, OnInit, Input } from '@angular/core';
import {SliderImage} from '../../interfaces';
import { trigger, transition, animate, style } from '@angular/animations'
@Component({
  selector: 'app-obra-card',
  templateUrl: './obra-card.component.html',
  styleUrls: ['./obra-card.component.scss'],
  
})
export class ObraCardComponent implements OnInit {
  @Input() image!: SliderImage;
  constructor() { }

  ngOnInit(): void {
  }

  
}
