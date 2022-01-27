import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomersDetailsService {
  private apiServer = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCustomerList(
    UserID: any,
    UserRole: any,
    CustomerType: any,
    page: any,
    PageLimit: any,
    SearchText: any
  ) {
    let params = new HttpParams();
    if (UserID) params = params.append('UserID', UserID);
    if (UserRole) params = params.append('UserRole', UserRole);
    if (CustomerType) params = params.append('CustomerType', CustomerType);
    if (page) params = params.append('page', page);
    if (PageLimit) params = params.append('PageLimit', PageLimit);
    if (SearchText) params = params.append('SearchText', SearchText);
    return this.http.get(this.apiServer + 'Customer/CustomerList/', {
      params: params,
    });
  }

  getCustomerDetails(CustomerID?: any) {
    let params = new HttpParams();
    params = params.append('CustomerID', CustomerID);
    return this.http.get(this.apiServer + 'Customer/EditCustomer/', {
      params: params,
    });
  }
  updateCurrentCustomer(data: any, UserID: any, CustomerID: any) {
    let params = new HttpParams();
    params = params.append('UserID', UserID);
    params = params.append('CustomerID', CustomerID);
    return this.http.put(this.apiServer + 'Customer/EditCustomer', data, {
      params: params,
    });
  }
  // getFixedCustList(
  //   UserID: any,
  //   UserRole: any,
  //   CustomerType: any,
  //   page: any,
  //   PageLimit: any,
  //   SearchText: any
  // ) {
  //   let params = new HttpParams();
  //   params = params.append('UserID', UserID);
  //   params = params.append('UserRole', UserRole);
  //   params = params.append('CustomerType', CustomerType);
  //   params = params.append('page', page);
  //   params = params.append('PageLimit', PageLimit);
  //   if (SearchText) params = params.append('SearchText', SearchText);
  //   return this.http.get(this.apiServer + 'Customer/CustomerList/', {
  //     params: params,
  //   });
  // }

  // getAdslAndFixedCustLIst(
  //   UserID: any,
  //   UserRole: any,
  //   CustomerType: any,
  //   page: any,
  //   PageLimit: any,
  //   SearchText: any
  // ) {
  //   let params = new HttpParams();
  //   params = params.append('UserID', UserID);
  //   params = params.append('UserRole', UserRole);
  //   params = params.append('CustomerType', CustomerType);
  //   params = params.append('page', page);
  //   params = params.append('PageLimit', PageLimit);
  //   if (SearchText) params = params.append('SearchText', SearchText);
  //   return this.http.get(this.apiServer + 'Customer/CustomerList/', {
  //     params: params,
  //   });
  // }
}
