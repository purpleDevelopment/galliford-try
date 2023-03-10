import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipSuccessPage } from './leadership-success.page';

describe('LeadershipSuccessPage', () => {
  let component: LeadershipSuccessPage;
  let fixture: ComponentFixture<LeadershipSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeadershipSuccessPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
