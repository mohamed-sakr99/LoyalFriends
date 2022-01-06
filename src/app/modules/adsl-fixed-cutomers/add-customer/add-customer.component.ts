import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  startDate = new Date();
  myForm!: FormGroup;
  name!: FormControl;
  nationalId!: FormControl;
  address!: FormControl;
  fixedLine!: FormControl;
  mobile!: FormControl;
  governate!: FormControl;
  central!: FormControl;
  serviceProvider!: FormControl;
  offer!: FormControl;
  serviceQuota!: FormControl;
  status!: FormControl;
  contactDate!: FormControl;
  constructor() {
    this.initFromcontrol();
    this.createForm();
  }

  // create init values
  initFromcontrol() {
    this.name = new FormControl('', Validators.required);
    this.nationalId = new FormControl('', Validators.required);
    this.address = new FormControl('', Validators.required);
    this.fixedLine = new FormControl('', Validators.required);
    this.mobile = new FormControl('', Validators.required);
    this.governate = new FormControl('', Validators.required);
    this.central = new FormControl('', Validators.required);
    this.serviceProvider = new FormControl('', Validators.required);
    this.offer = new FormControl('', Validators.required);
    this.serviceQuota = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);
    this.contactDate = new FormControl('', Validators.required);
  }

  // create form
  createForm() {
    this.myForm = new FormGroup({
      name: this.name,
      nationalId: this.nationalId,
      address: this.address,
      fixedLine: this.fixedLine,
      mobile: this.mobile,
      governate: this.governate,
      central: this.central,
      serviceProvider: this.serviceProvider,
      offer: this.offer,
      serviceQuota: this.serviceQuota,
      status: this.status,
      contactDate: this.contactDate,
    });
  }
  onSubmit() {
    console.log(this.myForm.value);
    // return this.myForm.value;
  }
  ngOnInit(): void {}
}
