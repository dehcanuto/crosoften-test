import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleModeComponent } from './style-mode.component';

describe('StyleModeComponent', () => {
  let component: StyleModeComponent;
  let fixture: ComponentFixture<StyleModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleModeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
