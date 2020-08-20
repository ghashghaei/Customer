import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    EditCustomerComponent,
    ListComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
