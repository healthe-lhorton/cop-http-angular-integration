import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorSelectorComponent } from './contributor-selector.component';

describe('ContributorSelectorComponent', () => {
  let component: ContributorSelectorComponent;
  let fixture: ComponentFixture<ContributorSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
