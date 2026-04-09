import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWhatsaap } from './btn-whatsaap';

describe('BtnWhatsaap', () => {
  let component: BtnWhatsaap;
  let fixture: ComponentFixture<BtnWhatsaap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnWhatsaap],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnWhatsaap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
