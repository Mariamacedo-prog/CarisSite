import { NgModule, Injector } from '@angular/core';
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
import { ObrasComponent } from './pages/obras/obras.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
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
    MatInputModule
  ],  
  exports: [SliderComponent, AppComponent, NavComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 

}
