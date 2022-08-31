import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObrasRoutingModule} from './obras-routing.module';
import { ObrasComponent } from "./obras.component";
import { NavModule } from 'src/app/components/nav/nav.module';
import { RouterModule } from '@angular/router';
import { ObraCardModule } from 'src/app/components/obra-card/obra-card.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
@NgModule({
  declarations: [
    ObrasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ObrasRoutingModule,
    NavModule,
    ObraCardModule,
    FooterModule
  ],

  exports: [ObrasComponent]
})
export class ObrasModule { }
