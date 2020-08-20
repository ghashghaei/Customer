import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
{path:'', redirectTo:'list',pathMatch:'full' },
{path:'list', component:ListComponent},
{path:'edit/:id', component:EditCustomerComponent},
{path:'delete/:id', component:DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
