import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallPartnerComponent } from './call-partner.component';

describe('CallPartnerComponent', () => {
  let component: CallPartnerComponent;
  let fixture: ComponentFixture<CallPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
