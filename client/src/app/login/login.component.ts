import { Component, OnInit } from '@angular/core';

import { LoginModel } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public user: LoginModel;

  constructor(private loginService: LoginService) {
    this.user = new LoginModel();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  prosesLogin(){
    this.loginService.login(this.user).subscribe(res => {
      console.log(res);
    });
  }

}
