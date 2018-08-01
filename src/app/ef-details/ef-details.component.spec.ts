import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfDetailsComponent } from './ef-details.component';

describe('EfDetailsComponent', () => {
  let component: EfDetailsComponent;
  let fixture: ComponentFixture<EfDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
