import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCrimeComponent } from './info-crime.component';

describe('InfoCrimeComponent', () => {
  let component: InfoCrimeComponent;
  let fixture: ComponentFixture<InfoCrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCrimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
