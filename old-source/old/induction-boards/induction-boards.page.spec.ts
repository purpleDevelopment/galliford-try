import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionBoardsPage } from './induction-boards.page';

describe('InductionBoardsPage', () => {
  let component: InductionBoardsPage;
  let fixture: ComponentFixture<InductionBoardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InductionBoardsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionBoardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
