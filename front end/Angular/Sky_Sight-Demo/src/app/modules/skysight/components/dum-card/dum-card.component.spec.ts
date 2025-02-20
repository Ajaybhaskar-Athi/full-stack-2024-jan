import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumCardComponent } from './dum-card.component';

describe('DumCardComponent', () => {
  let component: DumCardComponent;
  let fixture: ComponentFixture<DumCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DumCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
