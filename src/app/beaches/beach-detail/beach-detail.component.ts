import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-beach-detail',
  templateUrl: './beach-detail.component.html',
})
export class BeachDetailComponent implements OnInit {
  id: any;
  data: any;
  access_token = localStorage.getItem('token');

  theHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.access_token}`,
  });

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });

    this.api.getBeachDetail(this.id, this.theHeaders).subscribe((res) => {
      this.data = res;
    });
  }
}
