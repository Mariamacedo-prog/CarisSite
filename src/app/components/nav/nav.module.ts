import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from "./nav.component";
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],

  exports: [NavComponent]
})
export class NavModule { }
