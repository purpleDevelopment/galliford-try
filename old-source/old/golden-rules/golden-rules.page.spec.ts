import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenRulesPage } from './golden-rules.page';

describe('GoldenRulesPage', () => {
  let component: GoldenRulesPage;
  let fixture: ComponentFixture<GoldenRulesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoldenRulesPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenRulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
