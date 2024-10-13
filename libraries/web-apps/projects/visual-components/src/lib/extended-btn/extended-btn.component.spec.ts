import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedBtnComponent } from './extended-btn.component';
import { ClrButton } from '@clr/angular';

describe('ExtendedBtnComponent', () => {
  let component: ExtendedBtnComponent;
  let fixture: ComponentFixture<ExtendedBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
