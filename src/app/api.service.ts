import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = "http://192.168.0.9:8000"
  httpHeaders = new HttpHeaders({'Content-type': 'application/json' })
  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<any>{
    return this.http.get(this.baseurl + '/projects/projects/', {headers: this.httpHeaders});
  }
}
