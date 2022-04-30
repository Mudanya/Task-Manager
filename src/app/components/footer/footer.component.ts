import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  route = "/about";
  routeTitle = "About";
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.route = this.router.url 
    this.routeTitle = this.router.url === "/about" ? "About" : "Go Back";
  }
  routeChange() {
    this.route = this.router.url 
    this.routeTitle = this.router.url === "/about" ? "About" : "Go Back";
  }
}
