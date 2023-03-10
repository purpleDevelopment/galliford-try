import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPracticesPage } from './best-practices.page';

describe('BestPracticePage', () => {
  let component: BestPracticesPage;
  let fixture: ComponentFixture<BestPracticesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BestPracticesPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPracticesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
