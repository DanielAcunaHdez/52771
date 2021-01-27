import { Component, OnInit } from '@angular/core';
import { InfoGeneralService } from '../../services/info-general.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
  anio: number = new Date().getFullYear();
  
  constructor(public _infoGeneralService: InfoGeneralService) { }

  ngOnInit(): void {
  }

}
