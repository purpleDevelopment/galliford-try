import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListingPage } from './page-listing.page';

describe('PageListingPage', () => {
  let component: PageListingPage;
  let fixture: ComponentFixture<PageListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageListingPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
