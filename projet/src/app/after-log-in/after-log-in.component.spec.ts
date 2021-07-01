import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLogInComponent } from './after-log-in.component';

describe('AfterLogInComponent', () => {
  let component: AfterLogInComponent;
  let fixture: ComponentFixture<AfterLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
