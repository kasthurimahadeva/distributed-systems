import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponentResolver} from './app-component.resolver';
import {AppComponent} from './app.component';
import {NeighboursTableComponent} from './neighbours-table/neighbours-table.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    resolve: {details: AppComponentResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
