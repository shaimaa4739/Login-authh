import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from './auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(bodyObj: Auth){
    this.http.post('https://dummyjson.com/auth/login',bodyObj)
    .subscribe(
      (res)=>{
        this.router.navigate(['/Home']);
    })
  }
}
