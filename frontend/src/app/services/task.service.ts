import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

const baseUrl = 'http://localhost:8080/api/tasks';
const selectedUrl = 'http://localhost:8080/api/tasks/areas';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getAllArea(AreaName): Observable<any> {
    return this.http.get(`${selectedUrl}/${AreaName}`);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlEncoded = new URLSearchParams();
    urlEncoded.append("TaskName", data.TaskName);
    urlEncoded.append("Description", data.Description);
    urlEncoded.append("Status", data.Status);
    urlEncoded.append("Workers", data.Workers);
    urlEncoded.append("AreaName", data.AreaName);
    let body = urlEncoded.toString();

    return this.http.post(baseUrl, body, httpOptions);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}

