import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymnaseListPageComponent } from './gymnase-list-page.component';

describe('GymnaseListPageComponent', () => {
  let component: GymnaseListPageComponent;
  let fixture: ComponentFixture<GymnaseListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymnaseListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymnaseListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
