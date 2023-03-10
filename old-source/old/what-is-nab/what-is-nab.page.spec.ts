import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsNabPage } from './what-is-nab.page';

describe('WhatIsNabPage', () => {
  let component: WhatIsNabPage;
  let fixture: ComponentFixture<WhatIsNabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhatIsNabPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsNabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
