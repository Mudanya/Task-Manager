import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private subject= new Subject<any>();
  private addTask: boolean = false;
  
  constructor() { }

  toggleAddTask(): void {
    this.addTask = !this.addTask;
    this.subject.next(this.addTask);
  }
  onToggle():Observable<any> {
    return this.subject.asObservable();
  }
}
