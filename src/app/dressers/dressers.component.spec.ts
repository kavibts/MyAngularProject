/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DressersComponent } from './dressers.component';

describe('DressersComponent', () => {
  let component: DressersComponent;
  let fixture: ComponentFixture<DressersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DressersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DressersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
