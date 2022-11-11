import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path : "login",component:LoginComponent},
 
  {path : "dashboard", component:DashboardComponent,
   children:[
         {path: "notes",component:GetAllNotesComponent},
         {path:"displaynote", component:GetAllNotesComponent}
 ]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
