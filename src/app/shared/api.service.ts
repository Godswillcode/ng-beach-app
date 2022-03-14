import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}
  postBeach(data: any, theHeaders: any) {
    return this.http.post<any>('https://laravel-api123.herokuapp.com/api/beaches', data, {
      headers: theHeaders
    }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getBeach(theHeaders: any) {
    return this.http.get<any>('https://laravel-api123.herokuapp.com/api/beaches', {
      headers: theHeaders
    }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateBeach(data: any, id: number, theHeaders: any) {
    return this.http.put<any>('https://laravel-api123.herokuapp.com/api/beaches/' + id, data, {
      headers: theHeaders
    }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteBeach(id: number, theHeaders: any) {
    return this.http.delete<any>('https://laravel-api123.herokuapp.com/api/beaches/' + id, {
      headers: theHeaders
    }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getBeachDetail(id: any, theHeaders) {
    return this.http.get<any>('https://laravel-api123.herokuapp.com/api/beaches/' + id, {
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
      .get<any>('https://laravel-api123.herokuapp.com/api/getuser', {
        headers: theHeaders
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
