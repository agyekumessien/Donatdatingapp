import { Input, Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import {
  HttpClient,
  HttpClientModule,
  HttpEventType,
} from "@angular/common/http";


import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";




import { BehaviorSubject, Observable } from "rxjs";

import Swal from "sweetalert2";


declare let $: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  closeResult: string;
  registrationForm: FormGroup;
  loginForm: FormGroup;
  
  isLoggedIn: boolean = false;
  userDetails;
  cartItemCount: number = 0;
  approvalText: string = "";

  

  constructor(
    
    private toastr: ToastrService,
   
    private modalService: NgbModal,
    private fb: FormBuilder,
    
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private toasterService: ToastrService,
    /*Howdy */
    
    public toastrservice: ToastrService,
   
  ) {}
  ngOnInit() {
    //FORGOT PASSWORD
    // Initialize Controls
  }

   
  
  }
