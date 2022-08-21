import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObrasRoutingModule} from './obras-routing.module';
import { ObrasComponent } from "./obras.component";
import { NavModule } from 'src/app/components/nav/nav.module';
import { RouterModule } from '@angular/router';
import { ObraCardModule } from 'src/app/components/obra-card/obra-card.module';
@NgModule({
  declarations: [
    ObrasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ObrasRoutingModule,
    NavModule,
    ObraCardModule
  ],

  exports: [ObrasComponent]
})
export class ObrasModule { }
