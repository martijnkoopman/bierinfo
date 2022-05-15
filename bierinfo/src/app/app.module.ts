import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { BeerStyleOverviewComponent } from './components/beer-style-overview/beer-style-overview.component';
import { BeerStyleDetailComponent } from './components/beer-style-detail/beer-style-detail.component';
import { BeerBrandOverviewComponent } from './components/beer-brand-overview/beer-brand-overview.component';
import { BeerBrandDetailComponent } from './components/beer-brand-detail/beer-brand-detail.component';
import { BeerOverviewComponent } from './components/beer-overview/beer-overview.component';
import { BeerDetailComponent } from './components/beer-detail/beer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    BeerStyleOverviewComponent,
    BeerStyleDetailComponent,
    BeerBrandOverviewComponent,
    BeerBrandDetailComponent,
    BeerOverviewComponent,
    BeerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
