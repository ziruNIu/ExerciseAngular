import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterLogInComponent } from './after-log-in/after-log-in.component';
import { ConnectionComponent } from './connection/connection.component';
import { DetailComponent } from './detail/detail.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  {path: '', redirectTo: '/login',pathMatch:'full'},
  {
    path:'afterLogIn/:userName',
    component: AfterLogInComponent,
    children:[
      {path: '', redirectTo: 'products',pathMatch:'full'},
      {path: "products", component: ProductsComponent},
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
