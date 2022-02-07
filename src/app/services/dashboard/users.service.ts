import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiServer = environment.apiUrl;
  constructor(private http: HttpClient) {}

  AddUser(data: any, UserID: any) {
    let params = new HttpParams();
    params = params.append('UserID', UserID);
    return this.http.post(this.apiServer + 'User/AddUser/', data, {
      params: params,
    });
  }
}
