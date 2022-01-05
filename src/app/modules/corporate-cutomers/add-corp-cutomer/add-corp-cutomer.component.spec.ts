import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorpCutomerComponent } from './add-corp-cutomer.component';

describe('AddCorpCutomerComponent', () => {
  let component: AddCorpCutomerComponent;
  let fixture: ComponentFixture<AddCorpCutomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCorpCutomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCorpCutomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
