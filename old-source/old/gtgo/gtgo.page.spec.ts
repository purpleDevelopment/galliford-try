import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtgoPage } from './gtgo.page';

describe('GtgoPage', () => {
  let component: GtgoPage;
  let fixture: ComponentFixture<GtgoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GtgoPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtgoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
