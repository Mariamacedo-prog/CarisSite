import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreNosComponent} from './pages/sobre-nos/sobre-nos.component';
import {ContatoComponent} from './pages/contato/contato.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreNosComponent },
  {
    path: 'empreendimentos',
    loadChildren: () => import('../app/pages/obras/obras.module').then(m => m.ObrasModule)

  },
  { path: 'contato', component: ContatoComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
