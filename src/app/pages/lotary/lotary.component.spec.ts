import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotaryComponent } from './lotary.component';

describe('LotaryComponent', () => {
  let component: LotaryComponent;
  let fixture: ComponentFixture<LotaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LotaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LotaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
