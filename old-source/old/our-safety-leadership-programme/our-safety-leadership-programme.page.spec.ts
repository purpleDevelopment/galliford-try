import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSafetyLeadershipProgrammePage } from './our-safety-leadership-programme.page';

describe('OurSafetyLeadershipProgrammePage', () => {
  let component: OurSafetyLeadershipProgrammePage;
  let fixture: ComponentFixture<OurSafetyLeadershipProgrammePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OurSafetyLeadershipProgrammePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSafetyLeadershipProgrammePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
