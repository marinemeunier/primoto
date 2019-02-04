import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { PapaParseModule } from 'ngx-papaparse';
import { Routes, RouterModule } from '@angular/router';
import { CarteComponent } from './carte/carte.component';
import { CalculPrimeComponentComponent } from './calcul-prime-component/calcul-prime-component.component';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    CalculPrimeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	PapaParseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
