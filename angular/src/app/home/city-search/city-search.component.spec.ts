import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearch } from './city-search';

describe('CitySearch', () => {
  let component: CitySearch;
  let fixture: ComponentFixture<CitySearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitySearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitySearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
