import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CustomerService } from '../customer.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute,public router:Router,public cs:CustomerService) { }

  model:Customer = undefined;
del(){
  this.cs.delete_(this.model .customerID)
  this.router.navigate(['/list'])
}
  async ngOnInit() {
    this.route.params.subscribe(async params => {
      let id  =params['id'];
        this.model = await this.cs.get(id); 
    });
  }
}
