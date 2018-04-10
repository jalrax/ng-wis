import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {WaresListComponent} from './wares-list.component';

describe('WaresListComponent', () => {
  let component: WaresListComponent;
  let fixture: ComponentFixture<WaresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WaresListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
