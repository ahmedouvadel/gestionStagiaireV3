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
import { AuthenticationGuard } from './guards/authentication.guard';
const routes: Routes = [

  {path:'', redirectTo:'login' , pathMatch:'full' },
  { path: '', component: LoginComponent  },
  {path: 'card', component: CardComponent , canActivate:[AuthenticationGuard]},
  {path: 'utilisateurs', component: DashboardComponent, canActivate:[AuthenticationGuard]},
  {path: 'stagiaire', component: HomeComponent, canActivate:[AuthenticationGuard]},
  {path:'departement', component: DepartementComponent, canActivate:[AuthenticationGuard]},
  {path:'stagiaire/add', component: AddStagiaireComponent , canActivate:[AuthenticationGuard]},
  {path:'departement/add', component: AddDepartementComponent, canActivate:[AuthenticationGuard]},

  {path:'departement/edit', component: EditDepartementComponent , canActivate:[AuthenticationGuard]},
  {path:'stagiaire/edit', component: EditStagiaireComponent, canActivate:[AuthenticationGuard]},
  {path:'admin', component: AdminTemplateComponent , canActivate:[AuthenticationGuard]},
  {path:'direction', component: DirectionComponent , canActivate:[AuthenticationGuard] },
  {path:'service', component: ServiceComponent , canActivate:[AuthenticationGuard] },
  {path:'direction/add', component: AddDirectionComponent , canActivate:[AuthenticationGuard]},
  {path:'service/add', component: AddServiceComponent , canActivate:[AuthenticationGuard] },
  {path:'Utilisateur/add', component: AddUtilisateurComponent , canActivate:[AuthenticationGuard]},
  {path:'Status', component: StatusEchecComponent , canActivate:[AuthenticationGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
