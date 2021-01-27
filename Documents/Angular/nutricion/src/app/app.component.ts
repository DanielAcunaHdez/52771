import { Component } from '@angular/core';
import { InfoGeneral } from './interfaces/info-general.interfaces';
import { InfoGeneralService } from './services/info-general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public infoPaginaService:InfoGeneralService){
  }
}
