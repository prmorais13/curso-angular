import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindigComponent } from './data-bindig.component';

describe('DataBindigComponent', () => {
  let component: DataBindigComponent;
  let fixture: ComponentFixture<DataBindigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
