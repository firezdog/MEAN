import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//connect jQuery
declare var $:any;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

//jQuery to change focus on navbar
$(document).ready(function(){
  $(".nav-link").click(function(){
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
  });
})