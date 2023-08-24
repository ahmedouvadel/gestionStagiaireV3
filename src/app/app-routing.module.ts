import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './utilisateurs/dashboard.component';
import { CardComponent } from './card/card.component';
import { DepartementComponent } from './departement/departement.component';
import { AddStagiaireComponent } from './add-stagiaire/add-stagiaire.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { LoginComponent } from './login/login.component';
import { EditDepartementComponent } from './edit-departement/edit-departement.component';
import { EditStagiaireComponent } from './edit-stagiaire/edit-stagiaire.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { DirectionComponent } from './direction/direction.component';
import { ServiceComponent } from './service/service.component';
import { AddDirectionComponent } from './add-direction/add-direction.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';
import { StatusEchecComponent } from './status-echec/status-echec.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './stagiaire/home.component';
const routes: Routes = [

  {path:'', redirectTo:'login' , pathMatch:'full' },
  { path: '', component: LoginComponent  },
  {path: 'card', component: CardComponent},
  {path: 'utilisateurs', component: DashboardComponent},
  {path: 'stagiaire', component: HomeComponent},
  {path:'departement', component: DepartementComponent},
  {path:'stagiaire/add', component: AddStagiaireComponent},
  {path:'departement/add', component: AddDepartementComponent},

  {path:'departement/edit', component: EditDepartementComponent},
  {path:'stagiaire/edit', component: EditStagiaireComponent},
  {path:'admin', component: AdminTemplateComponent },
  {path:'direction', component: DirectionComponent },
  {path:'service', component: ServiceComponent },
  {path:'direction/add', component: AddDirectionComponent },
  {path:'service/add', component: AddServiceComponent },
  {path:'Utilisateur/add', component: AddUtilisateurComponent},
  {path:'Status', component: StatusEchecComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
