import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-corp-cutomer',
  templateUrl: './add-corp-cutomer.component.html',
  styleUrls: ['./add-corp-cutomer.component.css'],
})
export class AddCorpCutomerComponent implements OnInit {
  governorate: any = [];
  tomorrow = new Date();
  corporateForm!: FormGroup;
  name!: FormControl;
  mobile!: FormControl;
  governorateID!: FormControl;
  city!: FormControl;
  companyddress!: FormControl;
  contactDate!: FormControl;
  // create init Values

  constructor() {
    this.initFormControl();
    this.createForm();
  }
  initFormControl() {
    this.name = new FormControl('', Validators.required);
    this.mobile = new FormControl('', Validators.required);
    this.city = new FormControl('', Validators.required);
    this.companyddress = new FormControl('', Validators.required);
    this.governorateID = new FormControl('', Validators.required);
    this.contactDate = new FormControl('', Validators.required);
  }

  createForm() {
    this.corporateForm = new FormGroup({
      name: this.name,
      governorateID: this.name,
      mobile: this.name,
      city: this.name,
      companyddress: this.name,
      contactDate: this.name,
    });
  }
  onSubmit() {
    console.log(this.corporateForm.value);
  }
  ngOnInit(): void {}
}
