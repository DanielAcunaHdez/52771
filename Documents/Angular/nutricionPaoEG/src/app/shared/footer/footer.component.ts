import { Component, OnInit } from '@angular/core';
import { InfoGeneralService } from 'src/app/services/info-general.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  
  constructor(public _infoGeneralService: InfoGeneralService) { }

  ngOnInit(): void {
  }

}
