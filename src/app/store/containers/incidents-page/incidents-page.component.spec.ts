import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsPageComponent } from './incidents-page.component';

describe('IncidentsPageComponent', () => {
  let component: IncidentsPageComponent;
  let fixture: ComponentFixture<IncidentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
