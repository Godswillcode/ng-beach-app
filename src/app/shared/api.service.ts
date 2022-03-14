import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://laravel-api123.herokuapp.com/api/'

  constructor(private http: HttpClient) {}
  postBeach(data: any, theHeaders: any) {
    return this.http.post<any>(`${this.url}beaches`, data, {
      headers: theHeaders
    }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getBeach(theHeaders: any) {
    return this.http.get<any>(`${this.url}beaches`, {
      headers: theHeaders
    }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateBeach(data: any, id: number, theHeaders: any) {
    return this.http.put<any>(`${this.url}beaches/` + id, data, {
      headers: theHeaders
    }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteBeach(id: number, theHeaders: any) {
    return this.http.delete<any>(`${this.url}beaches/` + id, {
      headers: theHeaders
    }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getBeachDetail(id: any, theHeaders) {
    return this.http.get<any>(`${this.url}beaches/` + id, {
      headers: theHeaders
    }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // get user data
  getUser(theHeaders: any) {
    return this.http
      .get<any>(`${this.url}getuser`, {
        headers: theHeaders
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
