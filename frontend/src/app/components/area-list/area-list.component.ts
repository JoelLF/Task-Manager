import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/services/area.service';


@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {

  area: any;
  currentArea = null;
  currentIndex = -1;

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    this.retrieveAreas();
  }
  retrieveAreas(): void {
    this.areaService.getAll()
      .subscribe(
        data => {
          this.area = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveAreas();
    this.currentArea = null;
    this.currentIndex = -1;
  }

  setActiveArea(area, index): void {
    this.currentArea = area;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.areaService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveAreas();
        },
        error => {
          console.log(error);
        });
  }
}
