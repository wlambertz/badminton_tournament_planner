import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualComponentsComponent } from './visual-components.component';

describe('VisualComponentsComponent', () => {
  let component: VisualComponentsComponent;
  let fixture: ComponentFixture<VisualComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
