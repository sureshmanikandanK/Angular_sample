import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngformsComponent } from './angforms.component';

describe('AngformsComponent', () => {
  let component: AngformsComponent;
  let fixture: ComponentFixture<AngformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
