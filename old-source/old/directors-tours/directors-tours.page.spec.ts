import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsToursPage } from './directors-tours.page';

describe('DirectorsToursPage', () => {
  let component: DirectorsToursPage;
  let fixture: ComponentFixture<DirectorsToursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorsToursPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorsToursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
