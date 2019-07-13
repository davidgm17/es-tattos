import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilStudioComponent } from './perfil-studio.component';

describe('PerfilStudioComponent', () => {
  let component: PerfilStudioComponent;
  let fixture: ComponentFixture<PerfilStudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilStudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
