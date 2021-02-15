import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeSceneComponent } from './crime-scene.component';

describe('CrimeSceneComponent', () => {
  let component: CrimeSceneComponent;
  let fixture: ComponentFixture<CrimeSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimeSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
