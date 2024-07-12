import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinFliperComponent } from './coin-fliper.component';

describe('CoinFliperComponent', () => {
  let component: CoinFliperComponent;
  let fixture: ComponentFixture<CoinFliperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinFliperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoinFliperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
