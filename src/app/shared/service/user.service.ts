import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  set token(token: string) {
    localStorage.setItem('token', token);
  }

  get token() {
    return localStorage.getItem('token');
  }
}