import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, Router } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqsComponent } from './pages/faqs/faqs.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 10],
};

const app_routes: Routes = [
  {path: 'home', component: PrincipalComponent},
  {path: 'about', component:AboutComponent},
  {path: 'faqs', component:FaqsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes, {useHash: true}),
    RouterModule.forRoot(app_routes, routerOptions)
  ],
  
})
export class AppRoutingModule { }
