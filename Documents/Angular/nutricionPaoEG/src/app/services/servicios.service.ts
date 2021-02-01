import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicios } from '../interfaces/servicios.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  servicio: Servicios[] = [];

  constructor(private http: HttpClient) {
    this.cargarServicios();
  }

  cargarServicios(){

       // Leer el archivo JSON
   this.http.get('https://nutri-pao-eg-default-rtdb.firebaseio.com/servicios.json')
   .subscribe( (resp: any) => {
     this.servicio = resp;
     console.log(this.servicio);
     
     
   });

  }
}
