import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoueseOverviewPage } from './couese-overview.page';

describe('CoueseOverviewPage', () => {
  let component: CoueseOverviewPage;
  let fixture: ComponentFixture<CoueseOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoueseOverviewPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoueseOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
