import { CustomersDetailsService } from './../../../services/customers-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css'],
})
export class CustomerInfoComponent implements OnInit {
  customerInfo: any = {};
  customerHistory: any = [];
  constructor(
    private customersDetailsService: CustomersDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customerInformation();
  }

  customerInformation() {
    this.customersDetailsService
      .getCustomerInfo(this.route.snapshot.params.id)
      .subscribe((res: any) => {
        this.customerInfo = res.Customer;
        this.customerHistory = res.History;
        console.log('this.customerInfo', res);
      });
  }
}
