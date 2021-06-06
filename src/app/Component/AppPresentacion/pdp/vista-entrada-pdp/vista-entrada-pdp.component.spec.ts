import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEntradaPdpComponent } from './vista-entrada-pdp.component';

describe('VistaEntradaPdpComponent', () => {
  let component: VistaEntradaPdpComponent;
  let fixture: ComponentFixture<VistaEntradaPdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEntradaPdpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEntradaPdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
