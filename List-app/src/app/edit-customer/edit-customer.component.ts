import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CustomerService, Name } from '../customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  constructor(private route: ActivatedRoute,public cs:CustomerService) {}
model:Customer = undefined;
save(){
  if(this.model.customerID == 0)
  {
    if(this.cs.customerList.length == 0)
    {
      this.model.customerID = 1;
    }
    else{
      this.model.customerID = Math.max( ...this.cs.customerList.map(c=>c.customerID))+1;
    }
    this.cs.customerList.push(this.model);
  }
  else{
    for (let i =0;i<this.cs.customerList.length;i++ )
    {
      if(this.model.customerID == this.cs.customerList[i].customerID)
      {
        this.cs.customerList[i].gender = this.model.gender;
        this.cs.customerList[i].birthday = this.model.birthday;
        this.cs.customerList[i].name.first = this.model.name.first;
        this.cs.customerList[i].name.last = this.model.name.last;
      }
    }
  }
}
  async ngOnInit() {
    this.route.params.subscribe(async params => {
      let id  =params['id'];
      if(id==0)
      {
        this.model =new Customer();
      }
      else {
        this.model = await this.cs.get(id); 
      }

    });
  }
}
