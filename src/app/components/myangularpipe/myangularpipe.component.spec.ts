import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyangularpipeComponent } from './myangularpipe.component';

describe('MyangularpipeComponent', () => {
  let component: MyangularpipeComponent;
  let fixture: ComponentFixture<MyangularpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyangularpipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyangularpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
