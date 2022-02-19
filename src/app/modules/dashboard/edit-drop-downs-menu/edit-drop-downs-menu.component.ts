import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../services/api.service';
import { DropDownMenusService } from './../../../services/dashboard/drop-down-menus.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-drop-downs-menu',
  templateUrl: './edit-drop-downs-menu.component.html',
  styleUrls: ['./edit-drop-downs-menu.component.css'],
})
export class EditDropDownsMenuComponent implements OnInit {
  UserID = JSON.parse(localStorage.getItem('user') || '{}').ID;
  LookupID: any;
  serviceProvId: any;
  lookupsCategory: any = [];
  serviceProvider: any = [];
  serviceQuota: any = [];
  updateLookupForm!: FormGroup;
  LookupCategoryID!: FormControl;
  Name!: FormControl;
  ServiceProviderID!: FormControl;
  ServiceQuotaID!: FormControl;
  IsActive!: FormControl;
  isProviderShow: boolean = false;
  isQuotaShow: boolean = false;
  constructor(
    private dropDownMenusService: DropDownMenusService,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.initFormControl();
    this.createForm();
  }

  initFormControl() {
    this.Name = new FormControl('', Validators.required);
    this.LookupCategoryID = new FormControl('', Validators.required);
    this.ServiceProviderID = new FormControl(null, Validators.required);
    this.ServiceQuotaID = new FormControl('', Validators.required);
    this.IsActive = new FormControl(false, [Validators.required]);
  }
  createForm() {
    this.updateLookupForm = new FormGroup({
      Name: this.Name,
      LookupCategoryID: this.LookupCategoryID,
      ServiceProviderID: this.ServiceProviderID,
      ServiceQuotaID: this.ServiceQuotaID,
      IsActive: this.IsActive,
    });
  }

  ngOnInit(): void {
    this.LookupID = this.route.snapshot.params.id;
    this.getDropDownCategory();

    this.dropDownMenusService
      .geteditedLookups(this.LookupID)
      .subscribe((res: any) => {
        this.updateLookupForm = new FormGroup({
          Name: new FormControl(res.Lookup['Name']),
          LookupCategoryID: new FormControl(res.Lookup['LookupCategoryID']),
          ServiceProviderID: new FormControl(res.Lookup['ServiceProviderID']),
          ServiceQuotaID: new FormControl(res.Lookup['ServiceQuotaID']),
          IsActive: new FormControl(res.Lookup['IsActive']),
        });
      });
  }

  onSubmit() {}
  getDropDownCategory() {
    this.dropDownMenusService.getCategoryLookups().subscribe((res: any) => {
      this.lookupsCategory = res.Categories;
      console.log('result', res);
    });
  }
  categoryChange(event: any) {
    let value = (event.target as HTMLInputElement)?.value;
    this.serviceProvId = value;
    this.ServiceProviderID.reset();
    this.ServiceQuotaID.reset();
    this.Name.reset();
    this.IsActive.setValue(false);
    if (value === '2') {
      if (this.serviceProvider.length == 0) {
        this.dropDownMenusService.getServiceProvider().subscribe((res: any) => {
          this.serviceProvider = res.Lookups.ServiceProvider;
        });
      }
      this.isProviderShow = true;
      this.isQuotaShow = true;
      this.setValidation('ServiceProviderID');
      this.setValidation('ServiceQuotaID');
    } else if (value === '4') {
      if (this.serviceProvider.length == 0) {
        this.dropDownMenusService.getServiceProvider().subscribe((res: any) => {
          this.serviceProvider = res.Lookups.ServiceProvider;
        });
      }
      this.isProviderShow = true;
      this.isQuotaShow = false;
      this.setValidation('ServiceProviderID');
      this.clearValidation('ServiceQuotaID');
    } else {
      this.isProviderShow = false;
      this.isQuotaShow = false;
      this.clearValidation('ServiceProviderID');
      this.clearValidation('ServiceQuotaID');
    }
  }

  providerChange(event: any) {
    let value = (event.target as HTMLInputElement).value;
    if (this.serviceProvId === '2') {
      this.apiService.GetServiceQuota(value).subscribe((res: any) => {
        this.serviceQuota = res.Lookups.ServiceQuota;
        console.log('res', res);
      });
    } else {
      this.serviceQuota = [];
    }
  }
  setValidation(controlName: any) {
    this.updateLookupForm.controls[controlName].setValidators(
      Validators.required
    );
    this.updateLookupForm.controls[controlName].updateValueAndValidity();
  }

  clearValidation(controlName: any) {
    this.updateLookupForm.controls[controlName].clearValidators();
    this.updateLookupForm.controls[controlName].updateValueAndValidity();
  }
}
