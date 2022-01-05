import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideDynamicComponent } from './aside-dynamic.component';

describe('AsideDynamicComponent', () => {
  let component: AsideDynamicComponent;
  let fixture: ComponentFixture<AsideDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
