import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {
  public BASE_URL = './../../../assets/data/list.json';
  constructor(private http: HttpClient) {}

  public getList(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }
}
