import { Component, EventEmitter, Output } from '@angular/core';

import { Subscription, elementAt } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/servises/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() addNewTask:EventEmitter<Task> = new EventEmitter;

  text:string = '';
  day:string = '';
  reminder:boolean = false;
  showAddTask: boolean = true;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  onSubmit(){
    if(!this.text){
      alert('Please Write a text')
    }

    const newTask= {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    this.addNewTask.emit(newTask)
    
    this.text=''
    this.day=''
    this.reminder=false
    }
  }


