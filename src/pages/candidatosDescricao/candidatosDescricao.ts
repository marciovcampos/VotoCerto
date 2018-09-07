import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CandidatosDescricaoProvider } from './../../providers/candidatos-descricao/candidatos-descricao';

@Component({
  selector: 'page-candidatosDescricao',
  templateUrl: 'candidatosDescricao.html'
})
export class CandidatosDescricaoPage {
  
  candidatosDescricao: any;
  id: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private candidatosDescricaoProvider: CandidatosDescricaoProvider) {
    this.id = this.navParams.get('id');   
  }
  
  ionViewDidLoad() {  
    this.getCandidato(this.id);  
  }
  
  getCandidato(idCandidato) {    
    this.candidatosDescricaoProvider.getCandidato(idCandidato)
    .then(data => {
      this.candidatosDescricao = data;     
    });
  }


  
  
  
  
  
  
  
}
