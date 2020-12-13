import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkerService } from 'src/app/services/worker.service';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  currentTask = null;
  message = '';
  workers: any;
  statuses: any;
  editForm: FormGroup

  constructor(
    private taskService: TaskService,
    private workerService: WorkerService,
    private statusService: StatusService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.message = '';
    this.getTask(this.route.snapshot.paramMap.get('id'));
    this.retrieveWorkers();
    this.retrieveStatus();
    this.createForm();
  }

  createForm() {
    this.editForm = this.fb.group({
       TaskName: ['', Validators.required ],
       Description: ['', Validators.required ]
    });
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

  getTask(id): void {
    this.taskService.get(id)
      .subscribe(
        data => {
          this.currentTask = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTask(): void {
    this.taskService.update(this.currentTask.id, this.currentTask)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Se ha actualizado la tarea correctamente';
        },
        error => {
          console.log(error);
        });
  }

  deleteTask(): void {
    const areaName = this.currentTask.AreaName;
    this.taskService.delete(this.currentTask.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['tasks/', areaName]);
        },
        error => {
          console.log(error);
        });
  }

}
