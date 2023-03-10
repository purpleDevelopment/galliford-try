import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcsPage } from './pcs.page';

describe('PcsPage', () => {
  let component: PcsPage;
  let fixture: ComponentFixture<PcsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PcsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
