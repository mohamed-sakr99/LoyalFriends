import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDropDownMenuComponent } from './list-of-drop-down-menu.component';

describe('ListOfDropDownMenuComponent', () => {
  let component: ListOfDropDownMenuComponent;
  let fixture: ComponentFixture<ListOfDropDownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfDropDownMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfDropDownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
