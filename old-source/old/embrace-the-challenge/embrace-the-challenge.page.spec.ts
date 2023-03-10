import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbraceTheChallengePage } from './embrace-the-challenge.page';

describe('EmbraceTheChallengePage', () => {
  let component: EmbraceTheChallengePage;
  let fixture: ComponentFixture<EmbraceTheChallengePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmbraceTheChallengePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbraceTheChallengePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
