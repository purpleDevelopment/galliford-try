import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeToAWorldOfSaferWorkingPage } from './welcome-to-a-world-of-safer-working.page';

describe('WelcomeToAWorldOfSaferWorkingPage', () => {
  let component: WelcomeToAWorldOfSaferWorkingPage;
  let fixture: ComponentFixture<WelcomeToAWorldOfSaferWorkingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeToAWorldOfSaferWorkingPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeToAWorldOfSaferWorkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
