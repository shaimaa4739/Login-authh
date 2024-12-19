import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup
  obj!: Auth

  constructor(private _authService:AuthService){
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })

  }


  login(){
    this._authService.login({
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    })
  }

}
