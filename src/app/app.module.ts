import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { GridSectionComponent } from './grid-section/grid-section.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RechercheParPlaqueComponent } from './recherche-par-plaque/recherche-par-plaque.component';
import { FormsModule }   from '@angular/forms';
import { PapaParseModule } from 'ngx-papaparse';
import { ResultatViewComponent } from './resultat-view/resultat-view.component';
import { Routes, RouterModule } from '@angular/router';
import { CarteComponent } from './carte/carte.component';

const appRoutes: Routes = [
  { path: 'resultat/:id', component: ResultatViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    GridSectionComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    RechercheParPlaqueComponent,
    ResultatViewComponent,
    CarteComponent
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
