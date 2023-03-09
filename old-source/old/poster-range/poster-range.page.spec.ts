import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterRangePage } from './poster-range.page';

describe('PosterRangePage', () => {
  let component: PosterRangePage;
  let fixture: ComponentFixture<PosterRangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PosterRangePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterRangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
