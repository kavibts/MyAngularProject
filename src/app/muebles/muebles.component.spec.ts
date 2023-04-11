/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MueblesComponent } from './muebles.component';

describe('MueblesComponent', () => {
  let component: MueblesComponent;
  let fixture: ComponentFixture<MueblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MueblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
