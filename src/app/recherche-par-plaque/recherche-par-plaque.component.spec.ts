import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParPlaqueComponent } from './recherche-par-plaque.component';

describe('RechercheParPlaqueComponent', () => {
  let component: RechercheParPlaqueComponent;
  let fixture: ComponentFixture<RechercheParPlaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheParPlaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheParPlaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
