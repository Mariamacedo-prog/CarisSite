import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObrasComponent } from './obras.component';

const routes: Routes = [
  { path: '', component: ObrasComponent },
  // { path: '', 
  //   component: ObrasComponent
  //  children: [
  //     {
  //       path: 'tab1',
  //       loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
  //     },
  //     {
  //       path: '',
  //       redirectTo: 'tabs/tab2',
  //       pathMatch: 'full'
  //     }
  //   ]

  // }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObrasRoutingModule { }
