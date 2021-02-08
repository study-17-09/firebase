import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {
    const {email, password} = this.loginForm.getRawValue();
    this.authService.loginWithEmailAndPassword(email, password);
    this.navigateToHome();
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle();
    this.navigateToHome();
  }

  private navigateToHome(): void {
    this.router.navigate(['home']);
  }
}
