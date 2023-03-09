import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearMissReportingPage } from './near-miss-reporting.page';

describe('NearMissReportingPage', () => {
  let component: NearMissReportingPage;
  let fixture: ComponentFixture<NearMissReportingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NearMissReportingPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearMissReportingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
