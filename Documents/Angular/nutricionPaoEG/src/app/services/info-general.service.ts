import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoGeneral } from '../interfaces/info-general.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoGeneralService {

  info: InfoGeneral = {};
  
  constructor(private http: HttpClient) {
    this.cargarInformacion();
}

private cargarInformacion(){
  // Leer el archivo JSON
  this.http.get('https://nutri-pao-eg-default-rtdb.firebaseio.com/datos_generales.json')
  .subscribe( (resp: any) => {
    this.info = resp;
    
  });
    }

  }