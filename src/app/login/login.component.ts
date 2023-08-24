import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificaionService } from '../services/authentificaion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userFormGroup!: FormGroup;
  eroorMessage: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthentificaionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control(''),
    });
  }

  handleLogin() {
    let username = this.userFormGroup.value.username;
    let password = this.userFormGroup.value.password;
    this.authService.Login(username, password).subscribe({
      next: (findUser) => {
        this.authService.authenticateUser(findUser).subscribe({
          next: (data) => {
            this.router.navigate(['card']);
          },
        });
      },
      error: (err) => {
        this.eroorMessage = err;
      },
    });
  }
}
