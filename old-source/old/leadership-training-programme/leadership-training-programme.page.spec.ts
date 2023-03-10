import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipTrainingProgrammePage } from './leadership-training-programme.page';

describe('LeadershipTrainingProgrammePage', () => {
  let component: LeadershipTrainingProgrammePage;
  let fixture: ComponentFixture<LeadershipTrainingProgrammePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeadershipTrainingProgrammePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipTrainingProgrammePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
