import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ImpressumComponent } from './impressum.component';
import { LinksComponent } from './links.component';
import { PlatformComponent } from './platform.component';
import { PublicationsComponent } from './publications.component';
import { ResultsComponent } from './results.component';
import { TeamComponent } from './team.component';
import { UsecFrontiersComponent } from './usec-frontiers.component';
import { UsemeComponent } from './useme.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',           component: HomeComponent },
  { path: 'usecfrontiers',  component: UsecFrontiersComponent },
  { path: 'useme',          component: UsemeComponent },
  { path: 'team',           component: TeamComponent },
  { path: 'platform',       component: PlatformComponent },
  { path: 'results',        component: ResultsComponent },
  { path: 'publications',   component: PublicationsComponent },
  { path: 'links',          component: LinksComponent },
  { path: 'impressum',      component: ImpressumComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
