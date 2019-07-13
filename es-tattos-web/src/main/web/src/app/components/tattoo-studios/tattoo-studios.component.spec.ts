import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooStudiosComponent } from './tattoo-studios.component';

describe('TattooStudiosComponent', () => {
  let component: TattooStudiosComponent;
  let fixture: ComponentFixture<TattooStudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TattooStudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TattooStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
