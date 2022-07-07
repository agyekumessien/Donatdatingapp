import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';
import { User } from 'src/app/_Models/UserModel/user';
import { AccountService } from 'src/app/_Services/Account.service/account.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],

})

export class AppComponent {
  title = 'The Dating app';
  users: any;
 
  constructor(private accountService: AccountService) {}
  ngOnInit() {
 
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.accountService.setCurrentUser(user);
    
    }
  }
}


