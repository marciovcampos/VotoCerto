import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
Generated class for the CandidatosProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class CandidatosProvider {
  
  private API_URL = 'https://votocerto.herokuapp.com/';
  
  constructor(public http: HttpClient) {
    console.log('Hello CandidatosProvider Provider');
  }
  
  listaCandidatos() {    
    
    return new Promise(resolve => {
      this.http.get(this.API_URL+'Candidatos').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });   
        
  }
  
}
