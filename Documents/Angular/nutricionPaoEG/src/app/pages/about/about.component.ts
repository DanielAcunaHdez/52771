import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  

  contUp: string = 'top';

  constructor(private router: Router) {
    
  }


  ngOnInit(): void {
    
  }
  reloadPage(el:HTMLElement) {
    //console.log(this.router.url);
    //this.router.navigate(['/about']);
    el.scrollIntoView();
    // window.location.reload();
    
  }

  scroll(el:HTMLElement){
    el.scrollIntoView()
  }
}
