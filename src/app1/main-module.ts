import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App1} from './app1.component.ts';
import {Subroute1} from './subroute1.component.ts';
import {Subroute2} from './subroute2.component.ts';
import {Home} from './home.component.ts';
import {enableProdMode} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";

const appRoutes: Routes = [
  {
    path: 'subroute1',
    component: Subroute1
  },
  {
    path: 'subroute2',
    component: Subroute2
  },
  {
    path: '',
    component: Home
  },
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {}),
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/app1/'}],
  declarations: [
    App1,
    Subroute1,
    Subroute2,
    Home
  ],
  bootstrap: [App1]
})
export default class MainModule {
}
