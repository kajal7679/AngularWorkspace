import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistationComponent } from './components/registation/registation.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
   {
    path:'',component:HomeComponent
   },
   {
    path:'home',component:HomeComponent
   },
//  {
//     path:'',redirectTo:'home',pathMatch:'full'
//   },
   {
    path:'login',component:LoginComponent
   },
   {
    path:'registation',component:RegistationComponent
   }
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
