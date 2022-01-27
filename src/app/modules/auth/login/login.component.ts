import { AuthService } from './../../_services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userData: [] = [];
  // user;
  loginForm!: FormGroup;
  userName!: FormControl;
  password!: FormControl;
  constructor(private router: Router, private authService: AuthService) {
    this.initFormControl();
    this.createForm();
  }

  initFormControl() {
    this.userName = new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ])
    );
    this.password = new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ])
    );
  }
  createForm() {
    this.loginForm = new FormGroup({
      userName: this.userName,
      password: this.password,
    });
  }

  onSubmitLoginForm() {
    this.authService.login(this.loginForm.value).subscribe((user: any) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(user.User));
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {}
  // routeToApp() {
  //   this.router.navigate(['/']);
  // }
}
