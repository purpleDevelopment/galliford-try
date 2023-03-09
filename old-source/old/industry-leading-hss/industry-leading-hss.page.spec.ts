import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryLeadingHssPage } from './industry-leading-hss.page';

describe('IndustryLeadingHssPage', () => {
  let component: IndustryLeadingHssPage;
  let fixture: ComponentFixture<IndustryLeadingHssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndustryLeadingHssPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryLeadingHssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
