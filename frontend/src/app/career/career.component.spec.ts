import { ComponentFixture, TestBed } from '@angular/core/testing';

import { careerComponent } from './career.component';

describe('CareerComponent', () => {
  let component: careerComponent;
  let fixture: ComponentFixture<careerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ careerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(careerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
