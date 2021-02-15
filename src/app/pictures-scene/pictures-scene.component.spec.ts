import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesSceneComponent } from './pictures-scene.component';

describe('PicturesSceneComponent', () => {
  let component: PicturesSceneComponent;
  let fixture: ComponentFixture<PicturesSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturesSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
