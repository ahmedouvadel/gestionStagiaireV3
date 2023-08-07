import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { DepartementComponent } from './departement/departement.component';
import { AddStagiaireComponent } from './add-stagiaire/add-stagiaire.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { LoginComponent } from './login/login.component';
import { EditDepartementComponent } from './edit-departement/edit-departement.component';
import { EditStagiaireComponent } from './edit-stagiaire/edit-stagiaire.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';

const routes: Routes = [

  {path:'', redirectTo:'admin' , pathMatch:'full' },
  {path: 'card', component: CardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'home', component: HomeComponent},
  {path:'departement', component: DepartementComponent},
  {path:'stagiaire/add', component: AddStagiaireComponent},
  {path:'departement/add', component: AddDepartementComponent},
  {path:'login', component: LoginComponent},
  {path:'departement/edit', component: EditDepartementComponent},
  {path:'stagiaire/edit', component: EditStagiaireComponent},
  {path:'admin', component: AdminTemplateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
