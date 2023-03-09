import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSafetyVisionPage } from './our-safety-vision.page';

describe('OurSafetyVisionPage', () => {
  let component: OurSafetyVisionPage;
  let fixture: ComponentFixture<OurSafetyVisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OurSafetyVisionPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSafetyVisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
