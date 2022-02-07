import { CustomersDetailsService } from './../../../services/customers-details.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-adsl-cutomer-list',
  templateUrl: './adsl-cutomer-list.component.html',
  styleUrls: ['./adsl-cutomer-list.component.css'],
})
export class AdslCutomerListComponent implements OnInit {
  customers: any = [];
  UserID = JSON.parse(localStorage.getItem('user') || '{}').ID;
  UserRole = JSON.parse(localStorage.getItem('user') || '{}').Role;
  CustomerType = 22;
  page = 1;
  PageLimit = 10;
  totalCount: any;
  SearchText: any;
  constructor(
    private cutomerDetailsService: CustomersDetailsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getCustomerListForAdsl();
  }

  getCustomerListForAdsl() {
    this.cutomerDetailsService
      .getCustomerList(
        this.UserID,
        this.UserRole,
        this.CustomerType,
        this.page,
        this.PageLimit,
        this.SearchText
      )
      .subscribe((res: any) => {
        this.customers = res.Customers;
        this.totalCount = res.TotalCount;
        this.cdr.detectChanges();
      });
  }
  onPageChange(event: any) {
    this.page = event.page + 1;
    this.getCustomerListForAdsl();
  }
  onSearch() {
    this.getCustomerListForAdsl();
  }
}
