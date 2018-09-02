import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CandidatosProvider } from './../../providers/candidatos/candidatos';

@Component({
  selector: 'page-candidatos',
  templateUrl: 'candidatos.html'
})
export class CandidatosPage {
  
  candidatos: any;
  
  constructor(public navCtrl: NavController,  private candidatosProvider: CandidatosProvider) {
  }
  
  ionViewDidLoad() {
    this.listaCandidatos();
  }
  
  listaCandidatos() {    
    this.candidatosProvider.listaCandidatos()
    .then(data => {
      this.candidatos = data;
      console.log(this.candidatos);
    });
  }
  
  
  
  
  
  
  
}
