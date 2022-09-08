import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DonutCartComponent } from './components/donut-cart/donut-cart.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { DonutListComponent } from './components/donut-list/donut-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = 
[
  {path:'donut-list', component:DonutListComponent},
  {path:'donut-details/:id', component:DonutDetailsComponent},
  {path:'donut-cart', component:DonutCartComponent},
  {path:'', redirectTo: 'donut-list', pathMatch: 'full'},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
