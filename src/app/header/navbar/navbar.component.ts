import { Component, OnInit } from '@angular/core';
import { CustomJSService } from 'src/app/services/custom-js.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private custom: CustomJSService) {

  }

  ngOnInit(): void {
    this.custom.on('click', '.mobile-nav-toggle', (e: any) => {
      this.custom.select('#navbar').classList.toggle('navbar-mobile')
      e.target.classList.toggle('bi-list')
      e.target.classList.toggle('bi-x')
    })
  }

}
