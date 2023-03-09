import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnIntroductionPage } from './an-introduction.page';

describe('AnIntroductionPage', () => {
  let component: AnIntroductionPage;
  let fixture: ComponentFixture<AnIntroductionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnIntroductionPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnIntroductionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
