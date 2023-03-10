import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenRulesAndPage } from './golden-rules-and.page';

describe('GoldenRulesAndPage', () => {
  let component: GoldenRulesAndPage;
  let fixture: ComponentFixture<GoldenRulesAndPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoldenRulesAndPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenRulesAndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
