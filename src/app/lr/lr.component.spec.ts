/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LrComponent } from './lr.component';

describe('LrComponent', () => {
  let component: LrComponent;
  let fixture: ComponentFixture<LrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
