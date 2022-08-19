import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObrasRoutingModule} from './obras-routing.module';
import { ObrasComponent } from "./obras.component";
import {NavComponent} from '../../components/nav/nav.component'
import {AppModule} from '../../app.module';
import {AppRoutingModule} from '../../app-routing.module'
@NgModule({
  declarations: [
    ObrasComponent
  ],
  imports: [
    CommonModule,
    ObrasRoutingModule,
    AppRoutingModule,
    AppModule
  ],
  exports: []
})
export class ObrasModule { }
