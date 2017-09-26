import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ImpressumComponent } from './impressum.component';
import { LinksComponent } from './links.component';
import { PlatformComponent } from './platform.component';
import { PublicationsComponent } from './publications.component';
import { ResultsComponent } from './results.component';
import { TeamComponent } from './team.component';
import { UsecFrontiersComponent } from './usec-frontiers.component';
import { UsemeComponent } from './useme.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImpressumComponent,
    LinksComponent,
    PlatformComponent,
    PublicationsComponent,
    ResultsComponent,
    TeamComponent,
    UsecFrontiersComponent,
    UsemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
