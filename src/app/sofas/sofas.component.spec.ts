/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SofasComponent } from './sofas.component';

describe('SofasComponent', () => {
  let component: SofasComponent;
  let fixture: ComponentFixture<SofasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
