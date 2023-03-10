import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsAndResourcesPage } from './tools-and-resources.page';

describe('ToolsAndResourcesPage', () => {
  let component: ToolsAndResourcesPage;
  let fixture: ComponentFixture<ToolsAndResourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsAndResourcesPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsAndResourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
