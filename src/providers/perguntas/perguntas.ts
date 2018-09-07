import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PerguntasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerguntasProvider {

  private API_URL = 'https://votocerto.herokuapp.com/';

  constructor(public http: HttpClient) {
    console.log('Hello PerguntasProvider Provider');
  }

  getPerguntas() {
    return new Promise(resolve => {
      this.http.get(this.API_URL+'Perguntas').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    }); 
  }

}
