import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../_services';
import { User } from './../models';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent implements OnInit {
  currentUser: User;
  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  ngOnInit(): void { }
  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // get the user nulled - typescript won't care
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    location.reload();
  }
}
