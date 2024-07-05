import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryQuickPickComponent } from './lottery-quick-pick.component';

describe('LotteryQuickPickComponent', () => {
  let component: LotteryQuickPickComponent;
  let fixture: ComponentFixture<LotteryQuickPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LotteryQuickPickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LotteryQuickPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
