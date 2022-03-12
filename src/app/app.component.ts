import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,  private router: Router,
    private authenticationService: AuthenticationService) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
      this.currentUser = this.currentUserSubject.asObservable();
      // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');

    // get the user nulled - typescript won't care
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    location.reload();
  }
}



