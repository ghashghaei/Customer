import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  delete_(id:any){
    let found = this.customerList.filter(c=>c.customerID == id)[0];
    const index = this.customerList.indexOf(found, 0);
      this.customerList.splice(index, 1);
  }
  async get(id: any) {
    if(this.customerList.length==0)
    {
      await this.load();
    }
    let m = new Customer();
    let found = this.customerList.filter(c=>c.customerID == id)[0];
    m.init(found);
    return  m;
  }
  customerList:Customer[]=[];
  async load() {
  this.customerList = await this.http.get<any>("assets/data.json").toPromise();
    }
  constructor(public http:HttpClient) { }
}
export class Name    {
  public  first :string;
  public  last :string;
}
export class Customer    {
  constructor(){
    this.customerID =0;
    this.name = new Name();
  }
  init(c:Customer){
    this.customerID =c.customerID;
    this.gender = c.gender;
    this.birthday = c.birthday;
    this.name = new Name();
    this.name.first = c.name.first;
    this.name.last = c.name.last;
  }
  public  customerID :number;
  public name  :Name;
  public  birthday :string;
  public  gender :string;
}

