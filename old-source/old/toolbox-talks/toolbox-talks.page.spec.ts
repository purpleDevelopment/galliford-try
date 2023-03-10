import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxTalksPage } from './toolbox-talks.page';

describe('ToolboxTalksPage', () => {
  let component: ToolboxTalksPage;
  let fixture: ComponentFixture<ToolboxTalksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolboxTalksPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxTalksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
