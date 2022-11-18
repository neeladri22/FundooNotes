import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { AuthenticationGuard } from './components/AuthGuard/authentication.guard';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { IconComponent } from './components/icon/icon.component';
import { LoginComponent } from './components/login/login.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  {path : "login",component:LoginComponent},
  {path:'', redirectTo:"/login",pathMatch:'full'},
  {path : "dashboard", component:DashboardComponent,canActivate:[AuthenticationGuard],
   children:[
         {path: "notes",component:GetAllNotesComponent},
        
         {path:"icon",component:IconComponent},
         {path:"trash",component:TrashComponent},
         {path:"archieve",component:ArchieveComponent}
 ]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
