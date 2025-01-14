import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttaComponent } from './testta.component';

describe('TesttaComponent', () => {
  let component: TesttaComponent;
  let fixture: ComponentFixture<TesttaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesttaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesttaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
