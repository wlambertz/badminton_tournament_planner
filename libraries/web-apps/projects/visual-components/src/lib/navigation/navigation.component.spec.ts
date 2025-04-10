import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NavigationComponent } from './navigation.component'
import { provideAnimations } from '@angular/platform-browser/animations'

describe('NavigationComponent', () => {
  let component: NavigationComponent
  let fixture: ComponentFixture<NavigationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent],
      providers: [provideAnimations()],
    }).compileComponents()

    fixture = TestBed.createComponent(NavigationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
