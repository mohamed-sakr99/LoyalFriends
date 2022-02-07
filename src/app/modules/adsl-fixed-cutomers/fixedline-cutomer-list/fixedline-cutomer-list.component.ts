import { CustomersDetailsService } from './../../../services/customers-details.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-fixedline-cutomer-list',
  templateUrl: './fixedline-cutomer-list.component.html',
  styleUrls: ['./fixedline-cutomer-list.component.css'],
})
export class FixedlineCutomerListComponent implements OnInit {
  fixedCutomers: any = [];
  UserID = JSON.parse(localStorage.getItem('user') || '{}').ID;
  UserRole = JSON.parse(localStorage.getItem('user') || '{}').Role;
  CustomerType = 23;
  page: any = 1;
  PageLimit: any = 1;
  totalCount: any;
  SearchText: any;
  constructor(
    private customersDetailsService: CustomersDetailsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getFixedLineCustomerList();
  }

  getFixedLineCustomerList() {
    this.customersDetailsService
      .getCustomerList(
        this.UserID,
        this.UserRole,
        this.CustomerType,
        this.page,
        this.PageLimit,
        this.SearchText
      )
      .subscribe((res: any) => {
        this.fixedCutomers = res.Customers;
        this.totalCount = res.TotalCount;
        this.cdr.detectChanges();
      });
  }
  onPageChange(event: any) {
    this.page = event.page + 1;
    this.getFixedLineCustomerList();
  }
}
