import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbdPage } from './sbd.page';

describe('SbdPage', () => {
  let component: SbdPage;
  let fixture: ComponentFixture<SbdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SbdPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
