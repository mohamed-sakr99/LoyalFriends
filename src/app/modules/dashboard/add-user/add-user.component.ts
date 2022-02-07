import { MessageService } from 'primeng/api';
import { UsersService } from './../../../services/dashboard/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [MessageService],
})
export class AddUserComponent implements OnInit {
  UserID = JSON.parse(localStorage.getItem('user') || '{}').ID;
  addUserForm!: FormGroup;
  Name!: FormControl;
  Email!: FormControl;
  Mobile!: FormControl;
  UserName!: FormControl;
  Password!: FormControl;
  UserRoleID!: FormControl;
  IsActive!: FormControl;

  constructor(
    private usersService: UsersService,
    private cdr: ChangeDetectorRef,
    private messageService: MessageService
  ) {
    this.initForm();
    this.createForm();
  }
  initForm() {
    this.Name = new FormControl('', Validators.required);
    this.Email = new FormControl('', Validators.required);
    this.Mobile = new FormControl('', Validators.required);
    this.UserName = new FormControl('', Validators.required);
    this.Password = new FormControl('', Validators.required);
    this.UserRoleID = new FormControl('', Validators.required);
    this.IsActive = new FormControl('', Validators.required);
  }
  createForm() {
    this.addUserForm = new FormGroup({
      Name: this.Name,
      Email: this.Email,
      Mobile: this.Mobile,
      UserName: this.UserName,
      Password: this.Password,
      UserRoleID: this.UserRoleID,
      IsActive: this.IsActive,
    });
  }
  ngOnInit(): void {
    console.log('UserID', this.UserID);
  }

  onSubmit() {
    this.usersService
      .AddUser(this.addUserForm.value, this.UserID)
      .subscribe((res: any) => {
        if (res.status === 'successfully') {
          this.addUserForm.reset();
          this.addUserSuucessFuly();
        } else {
          this.ErrorInAddeddUser();
        }
      });
    console.log(this.addUserForm.value);
  }

  addUserSuucessFuly() {
    this.messageService.add({
      severity: 'success',
      summary: 'you added user Successfly',
      detail: 'تم اضافة موظف بنجاح',
    });
  }
  ErrorInAddeddUser() {
    this.messageService.add({
      severity: 'error',
      summary: 'user not Added Yet',
      detail: 'لم يتم اضافة موظف بعد',
    });
  }
}
