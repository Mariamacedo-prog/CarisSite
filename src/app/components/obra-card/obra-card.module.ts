import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObraCardComponent} from './obra-card.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ObraCardComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [ObraCardComponent]
})
export class ObraCardModule { }
