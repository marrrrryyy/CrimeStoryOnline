import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestioningBComponent } from './questioning-b.component';

describe('QuestioningBComponent', () => {
  let component: QuestioningBComponent;
  let fixture: ComponentFixture<QuestioningBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestioningBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestioningBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
