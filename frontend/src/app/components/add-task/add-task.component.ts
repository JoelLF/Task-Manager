import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  areaName = this.route.snapshot.paramMap.get('AreaName');

  task = {
    TaskName: '',
    Description: '',
    Status: '',
    Workers: '',
    AreaName: ''
  };
  submitted = false;

  constructor(private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveTask(): void {
    const data = {
      TaskName: this.task.TaskName,
      Description: this.task.Description,
      Status: this.task.Status,
      Workers: this.task.Workers,
      AreaName: this.areaName
    };

    this.taskService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTask(): void {
    this.submitted = false;
    this.task = {
      TaskName: '',
      Description: '',
      Status: '',
      Workers: '',
      AreaName: '',
    };
  }
}
