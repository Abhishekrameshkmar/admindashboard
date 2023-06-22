import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { ContactComponent } from './contact/contact.component';
import { LeadComponent } from './lead/lead.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  {
  path:'dashboard',component:DashboardComponent
},
{
  path:'',redirectTo:'dashboard',pathMatch:'full'
},

{path:'employees',component:EmployeesComponent},
{path:'gallery',component:GalleryComponent},
{path:'contact',component:ContactComponent},
{path:'lead',component:LeadComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
