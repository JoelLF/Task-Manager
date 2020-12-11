import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: any;
  selectedTasks: any;
  AreaName = this.route.snapshot.paramMap.get('AreaName');
  currentTask = null;
  currentIndex = -1;
  title = '';
  message = '';

  constructor(private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTask(this.AreaName);
  }

  getTask(AreaName): void {
    this.taskService.getAllArea(AreaName)
      .subscribe(
        data => {
          this.selectedTasks = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveTasks(): void {
    this.taskService.getAll()
      .subscribe(
        data => {
          this.tasks = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTasks();
    this.currentTask = null;
    this.currentIndex = -1;
  }

  setActiveTask(task, index): void {
    this.currentTask = task;
    this.currentIndex = index;
  }

  removeAllTasks(): void {
    this.taskService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTasks();
        },
        error => {
          console.log(error);
        });
  }


}
