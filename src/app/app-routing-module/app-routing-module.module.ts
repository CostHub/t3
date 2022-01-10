import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { IncidentsPageComponent } from "../store/containers/incidents-page/incidents-page.component";
import { LogoutPageComponent } from "../store/containers/logout-page/logout-page.component";
import { LoginPageComponent } from "../store/containers/login-page/login-page.component";
import { InProgressPageComponent } from "../store/containers/in-progress-page/in-progress-page.component";
import { DonePageComponent } from "../store/containers/done-page/done-page.component"
import { StaffPageComponent } from "../store/containers/staff-page/staff-page.component";




const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {path: 'incidents',  component: IncidentsPageComponent},
  { path: 'in-progress', component: InProgressPageComponent },
  { path: 'done', component: DonePageComponent },
  { path: 'staff', component: StaffPageComponent },
  { path: 'logout', component: LogoutPageComponent },
  { path: '**', component: LoginPageComponent },
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],

  exports: [RouterModule]

})
export class AppRoutingModuleModule { }
