import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionsValuesCommitmentsPage } from './visions-values-commitments.page';

describe('VisionsValuesCommitmentsPage', () => {
  let component: VisionsValuesCommitmentsPage;
  let fixture: ComponentFixture<VisionsValuesCommitmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VisionsValuesCommitmentsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionsValuesCommitmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
