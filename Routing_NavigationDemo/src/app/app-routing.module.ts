import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MenuComponent } from './Components/menu/menu.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [

  
  {
      path:'',
      component:MenuComponent
  },


  {
    path:'login',component:LoginComponent
  },

  {
    path:'register',component:RegisterComponent
  },
  
  {
    path:'home',component:HomeComponent
  }
  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
