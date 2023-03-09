import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnIntroductionFromPTPage } from './an-introduction-from-pt.page';

describe('AnIntroductionFromPTPage', () => {
  let component: AnIntroductionFromPTPage;
  let fixture: ComponentFixture<AnIntroductionFromPTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnIntroductionFromPTPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnIntroductionFromPTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
