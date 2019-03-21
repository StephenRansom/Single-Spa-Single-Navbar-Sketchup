import singleSpaAngular from 'single-spa-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import mainModule from './main-module.ts';
import { Router } from '@angular/router';
import {ApplicationRef} from '@angular/core';

const ngLifecycles = singleSpaAngular({
  domElementGetter,
  mainModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<app1 />`,
  Router,
  ApplicationRef,
})

export function bootstrap(props) {
  return ngLifecycles.bootstrap(props);
}

export function mount(props) {
  return ngLifecycles.mount(props).then(val => {});
}

export function unmount(props) {
  return ngLifecycles.unmount(props);
}

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('app1');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app1';
    document.body.appendChild(el);
  }

  return el;
}