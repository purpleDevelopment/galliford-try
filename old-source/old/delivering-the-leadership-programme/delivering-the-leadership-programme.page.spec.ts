import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveringTheLeadershipProgrammePage } from './delivering-the-leadership-programme.page';

describe('DeliveringTheLeadershipProgrammePage', () => {
  let component: DeliveringTheLeadershipProgrammePage;
  let fixture: ComponentFixture<DeliveringTheLeadershipProgrammePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveringTheLeadershipProgrammePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveringTheLeadershipProgrammePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
