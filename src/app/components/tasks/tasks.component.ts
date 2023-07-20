import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/servises/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks:Task[] = [];

constructor(private taskService:TaskService){
 
}
ngOnInit(){
 this.taskService.getTasks().subscribe((tasks)=>{
  this.tasks = tasks;
 })
}

onDeleteTask(task:Task){
  this.taskService.DeleteTask(task).subscribe(()=>(
    this.tasks= this.tasks.filter((t) =>t.id !== task.id)
   ))
}
addNewTask(task:Task){
  this.taskService.addTask(task).subscribe(()=>{
    this.tasks.push(task);
   })}
changeReminder(task:Task){
  task.reminder = !task.reminder
  this.taskService.ChangeReminderBtn(task).subscribe()
}
}
