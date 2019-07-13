import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEventComponent } from './perfil-event.component';

describe('PerfilEventComponent', () => {
  let component: PerfilEventComponent;
  let fixture: ComponentFixture<PerfilEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
