import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerStyleOverviewComponent } from './beer-style-overview.component';

describe('BeerStyleOverviewComponent', () => {
  let component: BeerStyleOverviewComponent;
  let fixture: ComponentFixture<BeerStyleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerStyleOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerStyleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
