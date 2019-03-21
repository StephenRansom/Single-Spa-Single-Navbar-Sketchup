import * as singleSpa from 'single-spa';
import 'zone.js';
import 'reflect-metadata';


singleSpa.registerApplication(
  'app-1', () =>
  import ('../app1/app1.js'),
  pathPrefix('/app1'));
singleSpa.registerApplication(
  'app-2', 
  () => import ('../app2/app2.js'),
  pathPrefix('/app2'));
singleSpa.registerApplication(
 'portal-page',
 () => import('../portal-page/portal-page.js'),
 pathPrefix('/portalpage'));

singleSpa.start();

// singleSpaNavigate('/portalpage');

function pathPrefix(prefix) {
  return function(location) {
    console.log("locations", location);
    return location.pathname.startsWith(`${prefix}`);
  }
}