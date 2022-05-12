import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/Moduls/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Sign Up',
      icon: 'login'
    },
    {
      label: 'About',
      icon: 'help'
    },
    {
      label: 'Pricing',
      icon: 'attach_money'
    },
    {
      label: 'Docs',
      icon: 'notes'
    },
    {
      label: 'Showcase',
      icon: 'slideshow'
    },
    {
      label: 'Blog',
      icon: 'rss_feed'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
