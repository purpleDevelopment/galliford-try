import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToBasicsPage } from './back-to-basics.page';

describe('BackToBasicsPage', () => {
  let component: BackToBasicsPage;
  let fixture: ComponentFixture<BackToBasicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BackToBasicsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToBasicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
