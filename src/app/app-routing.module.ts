import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreNosComponent} from './pages/sobre-nos/sobre-nos.component';
import { ObrasModule } from './pages/obras/obras.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreNosComponent },
  {
    path: 'obras',
    loadChildren: () => import('./pages/obras/obras.module').then(m => m.ObrasModule)
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
