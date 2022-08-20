import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObrasRoutingModule} from './obras-routing.module';
import { ObrasComponent } from "./obras.component";
import { NavModule } from 'src/app/components/nav/nav.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    ObrasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ObrasRoutingModule,
    NavModule
  ],

  exports: [ObrasComponent]
})
export class ObrasModule { }
