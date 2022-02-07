import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCorpCustComponent } from './edit-corp-cust.component';

describe('EditCorpCustComponent', () => {
  let component: EditCorpCustComponent;
  let fixture: ComponentFixture<EditCorpCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCorpCustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCorpCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
