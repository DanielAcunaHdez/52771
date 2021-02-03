import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicios } from '../interfaces/servicios.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  servicio: Servicios[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarServicios();
  }

  cargarServicios(){
       // Leer el archivo JSON
     return new Promise<void>(  ( resolve ) => {

      this.http.get('https://nutri-pao-eg-default-rtdb.firebaseio.com/servicios.json')
          .subscribe( (resp: any) => {
            this.servicio = resp;
            this.cargando = false;
            //console.log('servicios cargados: ', this.servicio);
            resolve();
          });

    });
     
   

  }

  
    
  
  
}
