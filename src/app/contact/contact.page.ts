import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {

  title = '';
  groupData: any;

  constructor(
    private userService: UserService,
    private httpClient: HttpClient
  ) {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.getGroupData();
  }

  private getGroupData() {
    const token = this.userService.token;
    const path = 'http://opendata.oae.go.th:8080/farmer/api/v1/group_data';
    const headers = new HttpHeaders({
      'Authorization': token
    });
    this.httpClient.get(path, { headers: headers }).subscribe(res => {
      this.title = res['description'];
      this.groupData = res['data_object'];
    });
  }
}
