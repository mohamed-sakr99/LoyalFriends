import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDropDownsMenuComponent } from './edit-drop-downs-menu.component';

describe('EditDropDownsMenuComponent', () => {
  let component: EditDropDownsMenuComponent;
  let fixture: ComponentFixture<EditDropDownsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDropDownsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDropDownsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
