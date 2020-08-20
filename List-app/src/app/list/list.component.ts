import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
  export class ListComponent implements OnInit{
    title = 'project';
   constructor(public cs: CustomerService){
  
   }
    async ngOnInit() {
    }
  
  }
  