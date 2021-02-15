import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectBComponent } from './suspect-b.component';

describe('SuspectBComponent', () => {
  let component: SuspectBComponent;
  let fixture: ComponentFixture<SuspectBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspectBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
