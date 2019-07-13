import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooUsersComponent } from './tattoo-users.component';

describe('TattooUsersComponent', () => {
  let component: TattooUsersComponent;
  let fixture: ComponentFixture<TattooUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TattooUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TattooUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
