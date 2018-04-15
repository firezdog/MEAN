import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DallsComponent } from './dalls.component';

describe('DallsComponent', () => {
  let component: DallsComponent;
  let fixture: ComponentFixture<DallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
