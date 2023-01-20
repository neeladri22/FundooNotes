import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { IconComponent } from './components/icon/icon.component';
import {MatMenuModule} from '@angular/material/menu';
import { TrashComponent } from './components/trash/trash.component';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { AuthguardServiceService } from './services/AugthGuardService/authguard-service.service';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchFilterPipe } from './Pipes/search-filter.pipe';
import { CollaboratorComponent } from './collaborator/collaborator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GetAllNotesComponent,
    CreateNotesComponent,
    DisplayNoteComponent,
    IconComponent,
    TrashComponent,
    ArchieveComponent,
    UpdateNoteComponent,
    SearchFilterPipe,
    CollaboratorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
    
    
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
