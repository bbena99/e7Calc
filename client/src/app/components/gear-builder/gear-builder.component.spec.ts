import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearBuilderComponent } from './gear-builder.component';

describe('GearBuilderComponent', () => {
  let component: GearBuilderComponent;
  let fixture: ComponentFixture<GearBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GearBuilderComponent]
    });
    fixture = TestBed.createComponent(GearBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
