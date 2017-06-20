import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrazionePage,
    TutorialPage,
    BrandsPage,
    CategoriePage,
    ProfiloPage,
    ProdottoPage,
    InfoPage,
    MapPage,
    NegozioPage,
    RegBrandsPage,
    RegCategoriePage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrazionePage,
    TutorialPage,
    BrandsPage,
    CategoriePage,
    ProfiloPage,
    ProdottoPage,
    InfoPage,
    MapPage,
    NegozioPage,
    RegBrandsPage,
    RegCategoriePage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Auth]
})
export class AppModule {}
