import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { main } from './main/main.component';
import { ConnectionComponent } from './connection/connection.component';
import { DetailComponent } from './detail/detail.component';
import { SelectorComponent } from './selector/selector.component';
const routes: Routes = [
  {path: '', redirectTo: '/login',pathMatch:'full'},
  {
    path:'afterLogIn/:userName',
    component: main,
    children:[
      {path: '', redirectTo: 'products',pathMatch:'full'},
      {path: "products", component: SelectorComponent},
      {path: "products/detail/:id", component: DetailComponent},
    ]
  },
  {path: 'login', component: ConnectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
