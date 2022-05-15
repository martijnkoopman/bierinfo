import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerBrandOverviewComponent } from './beer-brand-overview.component';

describe('BeerBrandOverviewComponent', () => {
  let component: BeerBrandOverviewComponent;
  let fixture: ComponentFixture<BeerBrandOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerBrandOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerBrandOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
