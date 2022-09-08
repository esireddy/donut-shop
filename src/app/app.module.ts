import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DonutListComponent } from './components/donut-list/donut-list.component';
import { DonutCartComponent } from './components/donut-cart/donut-cart.component'

@NgModule({
  declarations: [
    AppComponent,
    DonutDetailsComponent,
    NotFoundComponent,
    DonutListComponent,
    DonutCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
