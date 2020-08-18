import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService{
    constructor(private http: HttpClient){}

    // tslint:disable-next-line: typedef
    login(user){
        return this.http.post('/app/github/login', {
            username : user.username,
            password : user.password
        });
    }
}
