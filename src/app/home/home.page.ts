import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(
    private httpClient: HttpClient
  ) {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    const login = {
      id: 'train01',
      password: 'oaetrain123'
    };
    const body = JSON.stringify(login);
    const path = 'http://opendata.oae.go.th:8080/farmer/api/v1/authentication';
    this.httpClient.post(path, body)
      .subscribe((response) => {
        console.log('response : ', response);
      });
  }
}
