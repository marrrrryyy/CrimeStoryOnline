import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestioningAComponent } from './questioning-a.component';

describe('QuestioningAComponent', () => {
  let component: QuestioningAComponent;
  let fixture: ComponentFixture<QuestioningAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestioningAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestioningAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
