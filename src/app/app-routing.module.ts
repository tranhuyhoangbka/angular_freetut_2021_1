import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewCmpComponent} from './new-cmp/new-cmp.component';

const routes: Routes = [
  {
    path: 'new-cmp',
    component: NewCmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
