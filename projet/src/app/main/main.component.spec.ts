import { ComponentFixture, TestBed } from '@angular/core/testing';

import { main } from './main.component';

describe('AfterLogInComponent', () => {
  let component: main;
  let fixture: ComponentFixture<main>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ main ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(main);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
