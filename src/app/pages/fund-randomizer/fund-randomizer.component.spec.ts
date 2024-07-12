import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRandomizerComponent } from './fund-randomizer.component';

describe('FundRandomizerComponent', () => {
  let component: FundRandomizerComponent;
  let fixture: ComponentFixture<FundRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundRandomizerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
