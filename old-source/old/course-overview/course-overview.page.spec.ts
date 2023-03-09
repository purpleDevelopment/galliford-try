import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOverviewPage } from './course-overview.page';

describe('CourseOverviewPage', () => {
  let component: CourseOverviewPage;
  let fixture: ComponentFixture<CourseOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseOverviewPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
