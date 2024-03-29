import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './stagiaire/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './utilisateurs/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { DepartementComponent } from './departement/departement.component';
import { AddStagiaireComponent } from './add-stagiaire/add-stagiaire.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { LoginComponent } from './login/login.component';
import { EditStagiaireComponent } from './edit-stagiaire/edit-stagiaire.component';
import { EditDepartementComponent } from './edit-departement/edit-departement.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { DirectionComponent } from './direction/direction.component';
import { ServiceComponent } from './service/service.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { AddDirectionComponent } from './add-direction/add-direction.component';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';
import { StatusEchecComponent } from './status-echec/status-echec.component';
import { DetailsComponent } from './details/details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { DleteStagiaireComponent } from './dlete-stagiaire/dlete-stagiaire.component';
import { DleteDepartementComponent } from './dlete-departement/dlete-departement.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DleteUserComponent } from './dlete-user/dlete-user.component';
import { DleteServiceComponent } from './dlete-service/dlete-service.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { EvoyerMailComponent } from './evoyer-mail/evoyer-mail.component';
import { DeletePeriodeComponent } from './delete-periode/delete-periode.component';
import { EditDirectionComponent } from './edit-direction/edit-direction.component';
import { DleteDirectionComponent } from './dlete-direction/dlete-direction.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthentificaionService } from './services/authentificaion.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    DashboardComponent,
    CardComponent,
    DepartementComponent,
    AddStagiaireComponent,
    AddDepartementComponent,
    LoginComponent,
    EditStagiaireComponent,
    EditDepartementComponent,
    AdminTemplateComponent,
    DirectionComponent,
    ServiceComponent,
    AddServiceComponent,
    AddDirectionComponent,
    AddUtilisateurComponent,
    StatusEchecComponent,
    DetailsComponent,
    DialogComponent,
    DleteStagiaireComponent,
    DleteDepartementComponent,
    EditUserComponent,
    DleteUserComponent,
    DleteServiceComponent,
    EditServiceComponent,
    EvoyerMailComponent,
    DeletePeriodeComponent,
    EditDirectionComponent,
    DleteDirectionComponent,


  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    // MATERIAL
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatToolbarModule,
    NgbModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    //BreadcrumbModule,
    MatDialogModule,


  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
