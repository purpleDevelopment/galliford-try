import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTenMinutesPage } from './first-ten-minutes.page';

describe('FirstTenMinutesPage', () => {
  let component: FirstTenMinutesPage;
  let fixture: ComponentFixture<FirstTenMinutesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstTenMinutesPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTenMinutesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
