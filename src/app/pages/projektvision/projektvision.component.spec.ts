import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektvisionComponent } from './projektvision.component';

describe('ProjektvisionComponent', () => {
  let component: ProjektvisionComponent;
  let fixture: ComponentFixture<ProjektvisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjektvisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjektvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
