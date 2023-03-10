import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPracticePage } from './best-practice.page';

describe('ArticlePage', () => {
  let component: BestPracticePage;
  let fixture: ComponentFixture<BestPracticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BestPracticePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPracticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
