import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSafetyCharterPage } from './site-safety-charter.page';

describe('SiteSafetyCharterPage', () => {
  let component: SiteSafetyCharterPage;
  let fixture: ComponentFixture<SiteSafetyCharterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiteSafetyCharterPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSafetyCharterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
