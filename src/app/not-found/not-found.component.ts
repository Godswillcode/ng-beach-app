import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<div class="d-flex justify-content-center align-items-center wrap">
      <div>
      <h4>404</h4>
    <a routerLink="" class="btn btn-warning">Back to home</a>
      </div>
  </div>`,
  styles: [
    `
      div.wrap {
        height: calc(100vh - 60px);
        width: 100%;
        background: var(--bg-light);
      }
      h4 {
        color: var(--primary);
        font-size: 3rem;
        font-weight: 600;
        text-align: center
      }
    `,
  ],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
