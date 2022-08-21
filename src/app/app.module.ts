import { NgModule, Injector, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from './components/carousel/carousel.module';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import {MatInputModule} from '@angular/material/input';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import {ObrasModule} from './pages/obras/obras.module';
import { ObrasComponent } from "./pages/obras/obras.component";
import { RouterModule } from '@angular/router';
import { NavModule } from './components/nav/nav.module';
import { ObraCardComponent } from './components/obra-card/obra-card.component';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    FooterComponent,
    FormularioComponent,
    SobreNosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    CarouselModule,
    MatInputModule,
    RouterModule,
    ObrasModule,
    NavModule
  ],  
  exports: [ AppComponent,
    SliderComponent,
    HomeComponent,
    FooterComponent,
    FormularioComponent,
    SobreNosComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 

}
