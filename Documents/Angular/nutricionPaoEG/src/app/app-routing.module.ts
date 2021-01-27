import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AboutComponent } from './pages/about/about.component';

const app_routes: Routes = [
  {path: 'home', component: PrincipalComponent},
  {path: 'about', component:AboutComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
