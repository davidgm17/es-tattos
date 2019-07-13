import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooGlobalEventsComponent } from './tattoo-global-events.component';

describe('TattooGlobalEventsComponent', () => {
  let component: TattooGlobalEventsComponent;
  let fixture: ComponentFixture<TattooGlobalEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TattooGlobalEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TattooGlobalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
