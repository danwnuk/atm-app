import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastCreatorComponent } from './toast-creator.component';

describe('ToastCreatorComponent', () => {
  let component: ToastCreatorComponent;
  let fixture: ComponentFixture<ToastCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
