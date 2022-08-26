import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Admin } from '../admin';

@Injectable()
export class LoginService {
  private url="http://localhost:8080";
  constructor(private http: HttpClient) { }

  sendCredential(username: string, password: string) {
    var admin = new Admin();
    admin.username=username;
    admin.password=password;
    return this.http.post(this.url+'/admin/login',admin);

  }

  logout() {
     let url = "http://localhost:8080/logout";
     return this.http.get(url, { withCredentials: true });
   }


}
