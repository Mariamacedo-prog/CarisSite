import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObrasRoutingModule} from './obras-routing.module';
import { ObrasComponent } from "./obras.component";
import {NavComponent} from '../../components/nav/nav.component'

@NgModule({
  declarations: [
    ObrasComponent
  ],
  imports: [
    CommonModule,
    ObrasRoutingModule
  ]
})
export class ObrasModule { }
