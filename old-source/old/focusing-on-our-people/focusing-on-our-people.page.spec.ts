import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusingOnOurPeoplePage } from './focusing-on-our-people.page';

describe('FocusingOnOurPeoplePage', () => {
  let component: FocusingOnOurPeoplePage;
  let fixture: ComponentFixture<FocusingOnOurPeoplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FocusingOnOurPeoplePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusingOnOurPeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
