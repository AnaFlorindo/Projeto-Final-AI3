import { Component } from '@angular/core';
import { Router } from '@angular/router';

//import { AuthenticationService } from './services/user.service';
import { User } from './_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html',
styleUrls:['app.component.scss']
 })
export class AppComponent {
  title= 'ai3';
   // currentUser: User;
/*
    constructor(
        private router: Router,
       // private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }*/
} 
