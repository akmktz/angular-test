import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatSortModule, MatTableModule} from '@angular/material';

import {AppComponent} from './app.component';
import {Page404Component} from './page404/page404.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {OperatorsComponent} from './operators/operators.component';
import {TableComponent} from './table/table.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'operators', component: OperatorsComponent},
    { path: 'table', component: TableComponent},
    { path: '**', component: Page404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    HomeComponent,
    AboutComponent,
    OperatorsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
