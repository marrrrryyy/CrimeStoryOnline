import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectAComponent } from './suspect-a.component';

describe('SuspectAComponent', () => {
  let component: SuspectAComponent;
  let fixture: ComponentFixture<SuspectAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspectAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
