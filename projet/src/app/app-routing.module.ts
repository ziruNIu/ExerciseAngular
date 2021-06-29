import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  {path: '', redirectTo: '/login',pathMatch:'full'},
  {path: 'login', component: ConnectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
