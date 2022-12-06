import { Component, Input, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationStart,
  Router,
  RouterLinkActive,
  RouterState,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TisMenu, isMenu } from './menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  $title = new BehaviorSubject('');
  myEmail = 'sauloramosjunior@hotmail.com';
  menu: TisMenu;
  linkColor!: `#${string}`;

  constructor(private activeRoute: Router) {
    this.menu = isMenu;
  }

  ngOnInit(): void {
    this.activeRoute.events.subscribe((e) => {
      if (e instanceof ActivationStart) {
        this.$title.next(e.snapshot.data['title'] ?? '');
      }
    });
  }

  sendMailTo() {
    return this.myEmail;
  }
}
