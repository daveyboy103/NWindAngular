import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {ICustomer} from "../models/customer";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private data: DataService) { }

  customers! : ICustomer[];
  private subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.data.getCustomers().subscribe( {
      next: value => this.customers = value
    })
  }

}
