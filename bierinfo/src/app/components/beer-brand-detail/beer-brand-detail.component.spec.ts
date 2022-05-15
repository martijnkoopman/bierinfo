import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerBrandDetailComponent } from './beer-brand-detail.component';

describe('BeerBrandDetailComponent', () => {
  let component: BeerBrandDetailComponent;
  let fixture: ComponentFixture<BeerBrandDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerBrandDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerBrandDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
