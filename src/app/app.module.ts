import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatIconModule, MatSortModule, MatTableModule} from '@angular/material';

import {AppComponent} from './app.component';
import {Page404Component} from './page404/page404.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {OperatorsComponent} from './operators/operators.component';
import {TableComponent} from './table/table/table.component';
import {TableItemComponent} from './table/table-item/table-item.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'operators', component: OperatorsComponent },
    { path: 'table', component: TableComponent },
    { path: 'table_item/:id', component: TableItemComponent },
    { path: '**', component: Page404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    HomeComponent,
    AboutComponent,
    OperatorsComponent,
    TableComponent,
    TableItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
