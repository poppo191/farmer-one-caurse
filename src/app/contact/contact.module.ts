import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactPage } from './contact.page';
import { UserService } from '../shared/service/user.service';
import { ContactDetailPage } from './contact-detail/contact-detail.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ContactPage },
      { path: 'detail/:id', component: ContactDetailPage }
    ])
  ],
  declarations: [
    ContactPage,
    ContactDetailPage
  ],
  providers: [
    UserService
  ]
})
export class ContactPageModule {}
