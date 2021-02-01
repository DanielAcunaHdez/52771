import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Preguntas } from '../interfaces/preguntas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  
  pregunta: Preguntas[] = [];

  constructor(private http: HttpClient) {
    this.cargarPreguntas();
}

cargarPreguntas(){
   // Leer el archivo JSON
   this.http.get('https://nutri-pao-eg-default-rtdb.firebaseio.com/preguntas.json')
   .subscribe( (resp: any) => {
     this.pregunta = resp;
     console.log(this.pregunta);
     
   });
  
}
}
