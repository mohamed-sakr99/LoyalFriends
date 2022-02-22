import { CustomersDetailsService } from './../../../services/customers-details.service';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fixedline-cutomer-list',
  templateUrl: './fixedline-cutomer-list.component.html',
  styleUrls: ['./fixedline-cutomer-list.component.css'],
})
export class FixedlineCutomerListComponent implements OnInit, OnDestroy {
  fixedCutomers: any = [];
  UserID = JSON.parse(localStorage.getItem('user') || '{}')?.ID;
  UserRole = JSON.parse(localStorage.getItem('user') || '{}')?.Role;
  CustomerType = 23;
  page: any = 1;
  PageLimit: any = 20;
  totalCount: any;
  SearchText: any;

  private unsubscribe: Subscription[] = [];

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

  onSearch() {
    this.getFixedLineCustomerList();
  }

  onClear() {
    this.SearchText = '';
    this.getFixedLineCustomerList();
  }
  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
