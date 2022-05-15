import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BeerStyleOverviewComponent } from './components/beer-style-overview/beer-style-overview.component';
import { BeerStyleDetailComponent } from './components/beer-style-detail/beer-style-detail.component';
import { BeerBrandOverviewComponent } from './components/beer-brand-overview/beer-brand-overview.component';
import { BeerBrandDetailComponent } from './components/beer-brand-detail/beer-brand-detail.component';
import { BeerOverviewComponent } from './components/beer-overview/beer-overview.component';
import { BeerDetailComponent } from './components/beer-detail/beer-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'bierstijlen', component: BeerStyleOverviewComponent },
  { path: 'bierstijlen/:id', component: BeerStyleDetailComponent },
  { path: 'bieren', component: BeerOverviewComponent },
  { path: 'bieren/:id', component: BeerDetailComponent },
  { path: 'biermerken', component: BeerBrandOverviewComponent },
  { path: 'biermerken/:id', component: BeerBrandDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
