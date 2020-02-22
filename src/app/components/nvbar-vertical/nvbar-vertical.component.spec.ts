import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvbarVerticalComponent } from './nvbar-vertical.component';

describe('NvbarVerticalComponent', () => {
  let component: NvbarVerticalComponent;
  let fixture: ComponentFixture<NvbarVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvbarVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvbarVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
