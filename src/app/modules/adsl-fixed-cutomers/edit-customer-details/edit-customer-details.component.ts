import { CustomersDetailsService } from './../../../services/customers-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-customer-details',
  templateUrl: './edit-customer-details.component.html',
  styleUrls: ['./edit-customer-details.component.css'],
})
export class EditCustomerDetailsComponent implements OnInit {
  serviceProvID: any;
  serviceQotaID: any;
  UserID = JSON.parse(localStorage.getItem('user') || '{}').ID;
  UserRole = JSON.parse(localStorage.getItem('user') || '{}').Role;
  page: any = 1;
  PageLimit: any = 10;
  CustomerType: any = 24;
  totalCount: any;
  governorate: any = [];
  todayDate = new Date();
  offers: any = [];
  RequestTypes: any = [];
  quota: any = [];
  providerService: any = [];
  cutomerStatus: any = [];
  routerType: any = [];
  customerType: any = [];
  GovernateID: any;
  cities: any = [];
  deliverMethod: any = [];
  createdBy = JSON.parse(localStorage.getItem('user') || '{}').ID;
  tomorrow = new Date(this.todayDate.getTime());
  editCustomer!: FormGroup;
  customerTypeID!: FormControl;
  name!: FormControl;
  nationalId!: FormControl;
  address!: FormControl;
  fixedLine!: FormControl;
  nearestFixedLine!: FormControl;
  mobile!: FormControl;
  governorateID!: FormControl;
  city!: FormControl;
  District!: FormControl;
  SpecialMark!: FormControl;
  central!: FormControl;
  serviceProviderID!: FormControl;
  offerID!: FormControl;
  serviceQuotaID!: FormControl;
  customerStatusID!: FormControl;
  RouterTypeID!: FormControl;
  RouterDeliveryMethodID!: FormControl;
  RequestTypeID!: FormControl;
  contactDate!: FormControl;
  Comment!: FormControl;
  CustomerID: any;
  constructor(
    private apiservice: ApiService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private customersDetailsService: CustomersDetailsService
  ) {
    this.initFormControl();
    this.createForm();
  }
  initFormControl() {
    this.customerTypeID = new FormControl('', Validators.required);
    this.name = new FormControl('', Validators.required);
    this.nationalId = new FormControl('', Validators.required);
    this.address = new FormControl('', Validators.required);
    this.fixedLine = new FormControl('', Validators.required);
    this.nearestFixedLine = new FormControl('', Validators.required);
    this.mobile = new FormControl('', Validators.required);
    this.governorateID = new FormControl('', Validators.required);
    this.city = new FormControl('', Validators.required);
    this.District = new FormControl('', Validators.required);
    this.SpecialMark = new FormControl('', Validators.required);
    this.central = new FormControl('', Validators.required);
    this.serviceProviderID = new FormControl('', Validators.required);
    this.offerID = new FormControl('', Validators.required);
    this.serviceQuotaID = new FormControl('', Validators.required);
    this.customerStatusID = new FormControl('', Validators.required);
    this.RouterTypeID = new FormControl('', Validators.required);
    this.RouterDeliveryMethodID = new FormControl('', Validators.required);
    this.contactDate = new FormControl('', Validators.required);
    this.RequestTypeID = new FormControl('', Validators.required);
    this.Comment = new FormControl('', Validators.required);
  }

  createForm() {
    this.editCustomer = new FormGroup({
      customerTypeID: this.customerTypeID,
      name: this.name,
      nationalId: this.nationalId,
      address: this.address,
      fixedLine: this.fixedLine,
      nearestFixedLine: this.nearestFixedLine,
      mobile: this.mobile,
      governorateID: this.governorateID,
      city: this.city,
      District: this.District,
      SpecialMark: this.SpecialMark,
      central: this.central,
      serviceProviderID: this.serviceProviderID,
      offerID: this.offerID,
      serviceQuotaID: this.serviceQuotaID,
      customerStatusID: this.customerStatusID,
      RouterTypeID: this.RouterTypeID,
      RouterDeliveryMethodID: this.RouterDeliveryMethodID,
      contactDate: this.contactDate,
      RequestTypeID: this.RequestTypeID,
      Comment: this.Comment,
    });
  }

  ngOnInit(): void {
    this.CustomerID = this.route.snapshot.paramMap.get('id');
    console.log(this.CustomerID);

    this.getAddCustLookups();
    this.customersDetailsService
      .getCustomerDetails(+this.CustomerID)
      .subscribe((res: any) => {
        this.serviceProvID = res.Customer.ServiceProviderID;
        this.addInOfferQuota(this.serviceProvID);
        this.serviceQotaID = res.Customer.ServiceQuotaID;
        this.addInServiceOffers(this.serviceQotaID);
        this.editCustomer = new FormGroup({
          customerTypeID: new FormControl(res.Customer['CustomerTypeID']),
          name: new FormControl(res.Customer['Name']),
          nationalId: new FormControl(res.Customer['NationalId']),
          address: new FormControl(res.Customer['Address']),
          fixedLine: new FormControl(res.Customer['FixedLine']),
          nearestFixedLine: new FormControl(res.Customer['NearestFixedLine']),
          mobile: new FormControl(res.Customer['Mobile']),
          governorateID: new FormControl(res.Customer['GovernorateID']),
          city: new FormControl(res.Customer['City']),
          District: new FormControl(res.Customer['District']),
          SpecialMark: new FormControl(res.Customer['SpecialMark']),
          central: new FormControl(res.Customer['Central']),
          serviceProviderID: new FormControl(res.Customer['ServiceProviderID']),
          offerID: new FormControl(res.Customer['OfferID']),
          serviceQuotaID: new FormControl(res.Customer['ServiceQuotaID']),
          customerStatusID: new FormControl(res.Customer['CustomerStatusID']),
          RouterTypeID: new FormControl(res.Customer['RouterTypeID']),
          RouterDeliveryMethodID: new FormControl(
            res.Customer['RouterDeliveryMethodID']
          ),
          contactDate: new FormControl(res.Customer['ContactDate']),
          RequestTypeID: new FormControl(res.Customer['RequestTypeID']),
          Comment: new FormControl(res.Customer['Comment']),
        });
      });
  }

  updateForm() {
    this.customersDetailsService
      .updateCurrentCustomer(
        this.editCustomer.value,
        this.UserID,
        this.CustomerID
      )
      .subscribe((res: any) => {
        console.log('res', res);
      });
  }

  addInOfferQuota(serviceProvID: any) {
    this.apiservice
      .GetServiceQuota(this.serviceProvID)
      .subscribe((res: any) => {
        this.quota = res.Lookups.ServiceQuota;
      });
  }

  addInServiceOffers(ServiceQota: any) {
    this.apiservice.getOffer(this.serviceQotaID).subscribe((res: any) => {
      this.offers = res.Lookups.Offer;
    });
  }
  getAddCustLookups() {
    this.apiservice.getAddCustomerLookUps().subscribe((res: any) => {
      this.customerType = res.Lookups.CustomerType;
      this.governorate = res.Lookups.Governorate;
      this.providerService = res.Lookups.ServiceProvider;
      this.cutomerStatus = res.Lookups.CustomerStatus;
      this.routerType = res.Lookups.RouterType;
      this.deliverMethod = res.Lookups.RouterDeliveryMethod;
      this.RequestTypes = res.Lookups.RequestType;
      console.log(this.RequestTypes);

      this.cdr.detectChanges();
    });
  }

  providerChange(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    this.apiservice.GetServiceQuota(value).subscribe((res: any) => {
      this.quota = res.Lookups.ServiceQuota;
    });
  }
}
