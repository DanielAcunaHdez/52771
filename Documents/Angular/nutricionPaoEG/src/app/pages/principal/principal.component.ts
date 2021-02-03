import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { BlogInstagramService } from '../../services/blog-instagram.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(public _servicioService: ServiciosService,
              public _servicioBlog: BlogInstagramService
    ) { }

  ngOnInit(): void {
  }

}
