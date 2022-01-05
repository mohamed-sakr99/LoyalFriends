import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdslCutomerListComponent } from './adsl-cutomer-list.component';

describe('AdslCutomerListComponent', () => {
  let component: AdslCutomerListComponent;
  let fixture: ComponentFixture<AdslCutomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdslCutomerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdslCutomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
