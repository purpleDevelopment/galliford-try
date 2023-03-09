import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationBoardsPage } from './communication-boards.page';

describe('CommunicationBoardsPage', () => {
  let component: CommunicationBoardsPage;
  let fixture: ComponentFixture<CommunicationBoardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunicationBoardsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationBoardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
