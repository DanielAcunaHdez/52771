import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  
  private fragment: string = ""; 
  existe = true;

  constructor(public _servicioService:ServiciosService,
    private route: ActivatedRoute) {
  }

 ngOnInit() {
this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
}

ngAfterViewInit(container: HTMLElement): void {

  const elementoServicio =  document.querySelector("#" + this.fragment);

  if (elementoServicio) {
      elementoServicio.scrollIntoView();
        }

}

}