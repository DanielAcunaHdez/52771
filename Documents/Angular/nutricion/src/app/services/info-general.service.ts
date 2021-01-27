import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoGeneral } from '../interfaces/info-general.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoGeneralService {

  infoGeneral: InfoGeneral = {};

  constructor(private http: HttpClient) {

this.cargaInfoGeneral();
  }


  private cargaInfoGeneral(){

    this.http.get('https://nutri-pao-eg-default-rtdb.firebaseio.com/datos_generales.json')
    .subscribe( (resp: any) => {
      this.infoGeneral = resp;
       console.log(this.infoGeneral.correo);
    });
  }

}
