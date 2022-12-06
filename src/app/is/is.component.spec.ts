import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsComponent } from './is.component';

describe('IsComponent', () => {
  let component: IsComponent;
  let fixture: ComponentFixture<IsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
