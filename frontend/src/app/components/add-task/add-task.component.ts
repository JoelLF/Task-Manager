import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusService } from 'src/app/services/status.service';
import { TaskService } from 'src/app/services/task.service';
import { WorkerService } from 'src/app/services/worker.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  areaName = this.route.snapshot.paramMap.get('AreaName');
  item = "Pendiente";
  workers: any;
  statuses: any;

  task = {
    TaskName: '',
    Description: '',
    Status: '',
    Workers: '',
    AreaName: ''
  };
  submitted = false;

  constructor(private taskService: TaskService,
    private workerService: WorkerService,
    private statusService: StatusService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveWorkers();
    this.retrieveStatus();
  }

  retrieveStatus(): void {
    this.statusService.getAll()
      .subscribe(
        data => {
          this.statuses = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveWorkers(): void {
    this.workerService.getAll()
      .subscribe(
        data => {
          this.workers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
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
