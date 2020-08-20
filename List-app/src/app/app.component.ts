import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project';
  constructor(public cs: CustomerService){
  }
  async ngOnInit() {
    await this.cs.load();
}
}
