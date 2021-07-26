import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestockPageComponent } from './restock-page.component';

describe('RestockPageComponent', () => {
  let component: RestockPageComponent;
  let fixture: ComponentFixture<RestockPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestockPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
