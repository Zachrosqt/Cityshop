import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { RegistrazionePage } from '../pages/registrazione/registrazione';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { BrandsPage } from '../pages/brands/brands';
import { CategoriePage } from '../pages/categorie/categorie';
import { ProdottoPage } from '../pages/prodotto/prodotto';
import { ProfiloPage } from '../pages/profilo/profilo';
import { InfoPage } from '../pages/info/info';
import { MapPage } from '../pages/map/map';
import { NegozioPage } from '../pages/negozio/negozio';
import { RegBrandsPage } from '../pages/regbrands/regbrands';
import { RegCategoriePage } from '../pages/regcategorie/regcategorie';
import { Auth } from '../providers/auth';
import { LoginPage } from '../pages/login/login';

import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = HomePage;
  // loader: any;

  constructor(platform: Platform, public auth: Auth, public loadingCtrl: LoadingController) {

    //this.presentLoading();
    this.auth.login().then((isLoggedIn) => {

        if (isLoggedIn) {
            this.rootPage = HomePage
        } else {
            this.rootPage = LoginPage;
        }

        //this.loader.dismiss();

    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  /* LOADING BAR
  presentLoading() {

      this.loader = this.loadingCtrl.create({
          content: "Autenticazione..."
      });

      this.loader.present();
          
  }
  */
}
