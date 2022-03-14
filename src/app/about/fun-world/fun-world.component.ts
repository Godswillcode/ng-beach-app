import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun-world',
  template: `<div class="d-flex justify-content-center">
    <img src="{{ funImg }}" alt="fun" />
  </div> `,
})
export class FunWorldComponent implements OnInit {
  funImg = '../../../assets/images/fun.gif';
  constructor() {}

  ngOnInit(): void {}
}
