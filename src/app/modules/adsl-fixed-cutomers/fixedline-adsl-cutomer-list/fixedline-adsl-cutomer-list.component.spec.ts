import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedlineAdslCutomerListComponent } from './fixedline-adsl-cutomer-list.component';

describe('FixedlineAdslCutomerListComponent', () => {
  let component: FixedlineAdslCutomerListComponent;
  let fixture: ComponentFixture<FixedlineAdslCutomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedlineAdslCutomerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedlineAdslCutomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
