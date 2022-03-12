import { HostListener } from "@angular/core";
import { SwiperOptions } from 'swiper';
import { ChangeDetectorRef, Component, OnInit, NgZone, ViewChild, OnDestroy } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
import { products } from '../list/products';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../models';
import { UserService, AuthenticationService } from '../_services';
// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import { BehaviorSubject } from "rxjs";
import Swiper from "swiper/types/swiper-class";

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
@HostListener('window:resize', ['$event'])
export class HomeComponent implements OnInit {
  content?: string;
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  };
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers()
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
  ngOnInit() {
    this.loadAllUsers();
  }
  title = 'ng-swiper-demo';
  slides = [
    'https://via.placeholder.com/600X200/00000/ffffff',
    'https://via.placeholder.com/600X200/00000/ffffff',
    'https://via.placeholder.com/600X200/00000/ffffff',
    'https://via.placeholder.com/600X200/00000/ffffff',
  ];
  slideData = [{
    id: 382,
    name: "Metal bluetooth cyan",
  }, {
    id: 822,
    name: "Avon",
  }, {
    id: 159,
    name: "Infrastructures",
  }, {
    id: 424,
    name: "Users Cotton",
  }];
  ngAfterViewInit() {
  }
}
