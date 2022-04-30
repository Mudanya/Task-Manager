import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UiService} from '../../services/ui.service'
import {Subscription} from 'rxjs'
import {Task} from "../../task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() addTask: EventEmitter<Task> = new EventEmitter();
  text:string ="";
  day:string ="";
  reminder: boolean = false;
  showAdd: boolean = false;
  subcription: Subscription = new Subscription();
  constructor( private uiService:UiService) {
    this.subcription = this.uiService.onToggle().subscribe((value) => 
    this.showAdd = value);
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text){
      alert("Weuh!")
    }

    const newTask:Task = {
      text:this.text,
      day:this.day,
      reminder: this.reminder
    }

    this.addTask.emit(newTask)
    this.text=''
    this.day= ''
    this.reminder=false
  }
}
