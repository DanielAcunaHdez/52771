import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogInstagram } from '../interfaces/blog-instagram.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlogInstagramService {

  blog: BlogInstagram[] = [];

  constructor(private http: HttpClient) {
    this.cargarBlog();
}

  cargarBlog(){
    // Leer el archivo JSON
    this.http.get('https://nutri-pao-eg-default-rtdb.firebaseio.com/blog.json')
    .subscribe( (resp: any) => {
      this.blog = resp;
      //console.log(this.blog);
      
    });
   
 }
}
