import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MenuItem } from 'src/app/Moduls/menu-item';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
 
  
  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
