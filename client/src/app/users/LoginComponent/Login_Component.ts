import { Observable, Subject } from 'rxjs';
import { flatMap, startWith } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './LoginComponent.html',
  styleUrls: ['./LoginComponent.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loading = false;
  submitted =false;
  returnUrl: string;


  // users$: Observable<Api.IUser[]>;

  // private userFilterSubject = new Subject<Api.IUserFilter>();

  /**
   * Constructor
   * @param userService User service
   * @param snackBar Snack bar
   */


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    
  ) { 
    
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [ '', Validators.required],
      password: ['', Validators.required]
    });
  
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  //onSearch(userFilter: Api.IUserFilter) {
   // this.userFilterSubject.next(userFilter);
  //}

 // onRefresh(userFilter: Api.IUserFilter) {
  //  this.userFilterSubject.next(userFilter);
  //}

  // melhor acesso para preencher
get f (){ return this.loginForm.controls;}


  onSubmit(){
    this.submitted = true;
// pára aqui se o formulario for inválido 
    if (this.loginForm.invalid){
      return;
    }

    this.loading =true;
    
    
 }

  
}
