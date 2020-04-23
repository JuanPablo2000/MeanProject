import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {AboutComponent} from './components/about/about.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import {DetailComponent} from './components/detail/detail.component';
import {EditComponent} from'./components/edit/edit.component';

const appRoutes:Routes=[
  {path:'',component:AboutComponent},
  {path:'about',component:AboutComponent},
  {path:'proyects',component:ProyectsComponent},
  {path:'createproyect',component:CreateComponent},
  {path:'jquery',component:ContactComponent},
  {path: 'proyecto/:id',component:DetailComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'**',component:ErrorComponent}


];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
