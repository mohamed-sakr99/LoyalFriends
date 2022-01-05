import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-dynamic',
  templateUrl: './aside-dynamic.component.html',
  styleUrls: ['./aside-dynamic.component.css'],
})
export class AsideDynamicComponent implements OnInit {
  @Input() hasBackdrop: any;
  constructor() {}

  ngOnInit(): void {}
}
