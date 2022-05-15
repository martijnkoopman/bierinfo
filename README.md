# bierinfo.nl
bierinfo.nl is a website targeting dutch beer drinkers and beer brewers. It is made with [TypeScript](https://www.typescriptlang.org), [Angular](https://angular.io) and [Angular Material](https://material.angular.io).

# Construction process
1. Download and install [Node.js](https://nodejs.org) including the package manager NPM.
2. Install Angular CLI
In command-line:
```
npm install -g @angular/cli
```
In PowerShell:
```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
3. Create the app
```
ng new bierinfo
```
* Add Angular Routing: Yes
* Stylesheet format: Sass (This is used by Angular Material)
```
cd bierinfo
```

4. Add Angular Material
```
ng add @angular/material
```
* Theme: Indigo/Pink
* Global typography styles: Yes
* Browser animations: Yes

5. Add naviagtion component

```
ng generate @angular/material:navigation components/navigation
```

app.component.html
```
<app-navigation></app-navigation>
```

components/navigation/navigation.component.html where the content should be:
```
<router-outlet></router-outlet>
```

5. Create some pages:

```
ng generate component components/home
ng generate component components/beer-style-overview
ng generate component components/beer-style-detail
ng generate component components/beer-brand-overview
ng generate component components/beer-brand-detail
ng generate component components/beer-overview
ng generate component components/beer-detail
```

6. Set routing for pages:
app-routing.module.ts:
```
import { HomeComponent } from './components/home/home.component';
import { BeerStyleOverviewComponent } from './components/beer-style-overview/beer-style-overview.component';
import { BeerStyleDetailComponent } from './components/beer-style-detail/beer-style-detail.component';
... etc ...

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'bierstijlen', component: BeerStyleOverviewComponent },
  { path: 'bierstijlen/:id', component: BeerStyleDetailComponent },
  { path: 'bieren', component: BeerOverviewComponent },
  { path: 'bieren/:id', component: BeerDetailComponent },
  { path: 'biermerken', component: BeerBrandOverviewComponent },
  { path: 'biermerken/:id', component: BeerBrandDetailComponent }
];
```

7. Set links in navigation.
components/navigation.component.html:
```html
<mat-nav-list>
    <a mat-list-item routerLink="/bierstijlen">
    <mat-icon mat-list-icon>liquor</mat-icon>
    <div mat-line>Bierstijlen</div>
    </a>
    <a mat-list-item routerLink="/biermerken">
    <mat-icon mat-list-icon>grade</mat-icon>
    <div mat-line>Biermerken</div>
    </a>
    <a mat-list-item routerLink="/bieren">
    <mat-icon mat-list-icon>sports_bar</mat-icon>
    <div mat-line>Bieren</div>
    </a>
</mat-nav-list>
```

# Getting started
To continue developing