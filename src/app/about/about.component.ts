import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
    `
      /* div {
        height: calc(100vh - 60px);
        width: 100%;
        background: var(--bg-light);
      }
      h4 {
        color: var(--primary);
        font-size: 3rem;
        font-weight: 600;
      } */
    `,
  ],
})
export class AboutComponent implements OnInit {
  aboutImg = "../../assets/images/about.jpg"
  constructor() {}

  ngOnInit(): void {}
}
