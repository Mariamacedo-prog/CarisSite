import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';
@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],

  exports: [FooterComponent]
})
export class FooterModule { }
