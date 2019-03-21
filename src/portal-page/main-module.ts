import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PortalPage} from './portal-page.component.ts';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";

const appRoutes: Routes = [
  
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {}),
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/portalpage/'}],
  declarations: [
    PortalPage
  ],
  bootstrap: [PortalPage]
})
export default class MainModule {
}
