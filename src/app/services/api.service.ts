import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://d163-197-162-133-148.ngrok.io/home/add';
  constructor(private http: HttpClient) {}

  addCutomerService(data: any) {
    return this.http.post(this.url, data);
  }
}
