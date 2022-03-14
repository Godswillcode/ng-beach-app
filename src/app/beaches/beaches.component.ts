import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-beaches',
  templateUrl: './beaches.component.html',
  styleUrls: ['./beaches.component.css'],
})
export class BeachesComponent implements OnInit {
  allBeaches: any;
  filteredString: string = '';
  access_token = localStorage.getItem('token');

  theHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.access_token}`,
  });

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getBeach(this.theHeaders).subscribe((res) => {
      this.allBeaches = res;
    });
  }
}
