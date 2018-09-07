import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CandidatosDescricaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CandidatosDescricaoProvider {

  private API_URL = 'https://votocerto.herokuapp.com/';

  constructor(public http: HttpClient) {
    console.log('Hello CandidatosDescricaoProvider Provider');
  }

  getCandidato(id) {
    return new Promise(resolve => {
      this.http.get(this.API_URL+'Candidatos?id='+id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    }); 
  }

}
