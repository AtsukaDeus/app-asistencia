import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetrivePage } from './retrive.page';

describe('RetrivePage', () => {
  let component: RetrivePage;
  let fixture: ComponentFixture<RetrivePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RetrivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
