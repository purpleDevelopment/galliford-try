import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBestPracticePage } from './upload-best-practice.page';

describe('UploadBestPracticePage', () => {
  let component: UploadBestPracticePage;
  let fixture: ComponentFixture<UploadBestPracticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadBestPracticePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBestPracticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
