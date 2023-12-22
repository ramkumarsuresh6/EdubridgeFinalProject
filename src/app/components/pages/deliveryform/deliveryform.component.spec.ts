import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryformComponent } from './deliveryform.component';

describe('DeliveryformComponent', () => {
  let component: DeliveryformComponent;
  let fixture: ComponentFixture<DeliveryformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveryformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
