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
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });

    this.api.getBeachDetail(this.id).subscribe((res) => {
      this.data = res;
    });
  }
}
