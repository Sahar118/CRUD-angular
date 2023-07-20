import { Component, Input, OnInit,Output, EventEmitter  } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task!:Task;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter;
  @Output() onChangeReminder:EventEmitter<Task> = new EventEmitter;

  faTimes:any=faTimes;
constructor(){}
ngOnInit(): void {
  
}

onDelete(task:Task){
return this.onDeleteTask.emit(task);
}

changeReminder(task:Task){
  return this.onChangeReminder.emit(task);
  }


}
