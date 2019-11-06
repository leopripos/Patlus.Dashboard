import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolListTableComponent } from './pool-list-table.component';

describe('PoolListTableComponent', () => {
  let component: PoolListTableComponent;
  let fixture: ComponentFixture<PoolListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
