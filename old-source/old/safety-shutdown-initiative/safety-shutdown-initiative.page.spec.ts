import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyShutdownInitiativePage } from './safety-shutdown-initiative.page';

describe('SafetyShutdownInitiativePage', () => {
  let component: SafetyShutdownInitiativePage;
  let fixture: ComponentFixture<SafetyShutdownInitiativePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SafetyShutdownInitiativePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyShutdownInitiativePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
