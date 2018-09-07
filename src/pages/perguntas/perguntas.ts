import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerguntasProvider } from './../../providers/perguntas/perguntas';

/**
 * Generated class for the PerguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perguntas',
  templateUrl: 'perguntas.html',
})
export class PerguntasPage {

  perguntas: any;
  totalPerguntas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private perguntasProvider: PerguntasProvider) {
  }

  ionViewDidLoad() {    
    this.getPerguntas();
  }

  getPerguntas() {    
    this.perguntasProvider.getPerguntas()
    .then(data => {
      this.perguntas = data;
      this.totalPerguntas = this.perguntas.lenght;
      console.log(this.perguntas.length);
    });
  }
 
}
