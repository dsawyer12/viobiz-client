import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.registerForm = this.fb.group( {
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  ngOnInit(): void {
  }

  registerUser(): void {
    this.authService.registerUser(this.registerForm.value);
  }
}
