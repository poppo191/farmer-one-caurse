import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  loginForm: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    const loginFormValue = this.loginForm.value;
    const login = {
      id: loginFormValue.username,
      password: loginFormValue.password
    };
    const body = JSON.stringify(login);
    const path = 'http://opendata.oae.go.th:8080/farmer/api/v1/authentication';
    this.httpClient.post(path, body)
      .subscribe((response) => {
        const status = response['status'];
        if (status) {
          alert('Login สำเร็จ');
        } else {
          alert('Login ไม่สำเร็จ');
        }
      });
  }
}
