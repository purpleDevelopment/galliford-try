import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsOverviewPage } from './tools-overview.page';

describe('ToolsOverviewPage', () => {
  let component: ToolsOverviewPage;
  let fixture: ComponentFixture<ToolsOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsOverviewPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
