import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RegistrazionePage } from '../registrazione/registrazione';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true; //splashscreen
  regButton = RegistrazionePage;

  constructor(public navCtrl: NavController) {
    
  }
    //splashscren
  ionViewDidLoad() {
      setTimeout(() => this.splash = false, 4000);
  }

  onLink(url: string) {
      window.open(url);
  }
}