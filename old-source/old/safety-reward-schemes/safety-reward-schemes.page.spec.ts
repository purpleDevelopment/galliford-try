import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyRewardSchemesPage } from './safety-reward-schemes.page';

describe('SafetyRewardSchemesPage', () => {
  let component: SafetyRewardSchemesPage;
  let fixture: ComponentFixture<SafetyRewardSchemesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SafetyRewardSchemesPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyRewardSchemesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
