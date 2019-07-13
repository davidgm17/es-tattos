import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAcordeonComponent } from './event-acordeon.component';

describe('EventAcordeonComponent', () => {
  let component: EventAcordeonComponent;
  let fixture: ComponentFixture<EventAcordeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAcordeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAcordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
