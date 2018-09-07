import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerguntasPage } from '../perguntas/perguntas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  iniciar(id){    
    this.navCtrl.push(PerguntasPage);
  }

}
