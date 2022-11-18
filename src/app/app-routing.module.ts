import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { IconComponent } from './components/icon/icon.component';
import { LoginComponent } from './components/login/login.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  {path : "login",component:LoginComponent},
 
  {path : "dashboard", component:DashboardComponent,
   children:[
         {path: "notes",component:GetAllNotesComponent},
         {path:"displaynote", component:GetAllNotesComponent},
         {path:"icon",component:IconComponent},
         {path:"trash",component:TrashComponent}
 ]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
