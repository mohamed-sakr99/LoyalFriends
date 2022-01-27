import { Direction, Directionality } from '@angular/cdk/bidi';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside-dynamic',
  templateUrl: './aside-dynamic.component.html',
  styleUrls: ['./aside-dynamic.component.css'],
})
export class AsideDynamicComponent implements OnInit {
  name: string = JSON.parse(localStorage.getItem('user') || '{}').Name;
  @Input() hasBackdrop: any;
  private dir: Direction = 'rtl';
  constructor(directionality: Directionality, private router: Router) {
    this.dir = directionality.value;

    directionality.change.subscribe(() => {
      this.dir = directionality.value;
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {}
}
