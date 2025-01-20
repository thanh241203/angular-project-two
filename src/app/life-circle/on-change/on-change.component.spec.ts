import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangeComponent } from './on-change.component';

describe('OnChangeComponent', () => {
  let component: OnChangeComponent;
  let fixture: ComponentFixture<OnChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
