import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDropDownMenuComponent } from './add-to-drop-down-menu.component';

describe('AddToDropDownMenuComponent', () => {
  let component: AddToDropDownMenuComponent;
  let fixture: ComponentFixture<AddToDropDownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToDropDownMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToDropDownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
