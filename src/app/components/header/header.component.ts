import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Task Tracker';
  subcription: Subscription = new Subscription();
  addTask: boolean =  false;
  constructor(private uiService: UiService, private router:Router) { 
    this.subcription = this.uiService.onToggle().subscribe(
      (value) => this.addTask = value
    )
  }
  ngOnInit(): void {
  }
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  displayBtn(route:string){
    return this.router.url === route;
  }
}
