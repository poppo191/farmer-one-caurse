import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.page.html',
  styleUrls: ['./contact-detail.page.scss'],
})
export class ContactDetailPage implements OnInit {

  title = '';
  detail: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.getDetail(id);
    });
  }

  private getDetail(id: number) {
    const token = this.userService.token;
    const path = 'http://opendata.oae.go.th:8080/farmer/api/v1/house/group';
    const headers = new HttpHeaders({
      'Authorization': token
    });
    const body = {
      group_id: id
    };
    this.httpClient.post(path, body, { headers: headers }).subscribe(res => {
      this.title = res['description'];
      this.detail = res['date_object'];
    });
  }
}
