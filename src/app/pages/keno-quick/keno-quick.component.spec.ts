import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenoQuickComponent } from './keno-quick.component';

describe('KenoQuickComponent', () => {
  let component: KenoQuickComponent;
  let fixture: ComponentFixture<KenoQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KenoQuickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KenoQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
