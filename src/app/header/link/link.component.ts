import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input()
  link?: string;
  @Input()
  title?: string;
  currentyUrl = '';
  constructor(private router: Router) {
    this.currentyUrl = this.router.url;
  }

  ngOnInit(): void {}

  goToThisRoute(event: any) {
    if (this.link?.includes('mailto:')) {
      window.open(this.link);
    } else {
      let active = document.querySelectorAll('.active');
      active.forEach((e) => {
        e.classList.remove('active');
      });
      event.target.classList.add('active');
      this.router.navigate([this.link]);
    }
  }
}
