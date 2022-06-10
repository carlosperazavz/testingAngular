import { Injectable } from '@angular/core';
import { Task } from '../models/task';

const TasksList=[
  {
    "id": 1,
    "title": "do my home work",
    "description": "it is boring",
  },
  {
    "id": 2,
    "title": "cleran my room",
    "description": "it is boring too",
  },
  {
    "id": 3,
    "title": "do what I want for all day",
    "description": "ohh yeah!",
  },
]


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(){
    return TasksList;
  }

  getOneTask(_id: number){
    return TasksList.find(task=> task.id === _id);
  }

  addTask(task: Task){
    TasksList.push(task);
  }

  editTask(newTaskEdit){
    const index = TasksList.findIndex(task => task.id === newTaskEdit.id);
    TasksList[index]= newTaskEdit;
  }

  deleteTask(_id: number){
    TasksList.splice(_id, 1);
  }

}
