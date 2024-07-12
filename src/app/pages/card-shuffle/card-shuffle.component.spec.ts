import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShuffleComponent } from './card-shuffle.component';

describe('CardShuffleComponent', () => {
  let component: CardShuffleComponent;
  let fixture: ComponentFixture<CardShuffleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardShuffleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardShuffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
