import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  myId = 4;

  newTask = {
    "id": this.myId,
    "title": "",
    "description": "",
  }

  constructor(private listServ: TaskService) { }

  ngOnInit(): void {
  }

  addTask(){
    console.log("we will send the data", this.newTask);
    this.listServ.addTask(this.newTask);
    this.myId ++;
    this.newTask = {
      id:0,
      title:"",
      description:"",
    }
  }

}
