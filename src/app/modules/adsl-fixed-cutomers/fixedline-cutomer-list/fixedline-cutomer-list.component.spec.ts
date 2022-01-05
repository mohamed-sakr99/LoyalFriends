import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedlineCutomerListComponent } from './fixedline-cutomer-list.component';

describe('FixedlineCutomerListComponent', () => {
  let component: FixedlineCutomerListComponent;
  let fixture: ComponentFixture<FixedlineCutomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedlineCutomerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedlineCutomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
