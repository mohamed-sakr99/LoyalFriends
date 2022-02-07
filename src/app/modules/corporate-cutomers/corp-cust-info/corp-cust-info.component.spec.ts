import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpCustInfoComponent } from './corp-cust-info.component';

describe('CorpCustInfoComponent', () => {
  let component: CorpCustInfoComponent;
  let fixture: ComponentFixture<CorpCustInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpCustInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpCustInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
