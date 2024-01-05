import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeilingComponent } from './ceiling.component';

describe('CeilingComponent', () => {
  let component: CeilingComponent;
  let fixture: ComponentFixture<CeilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeilingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
