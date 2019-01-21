import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculPrimeComponentComponent } from './calcul-prime-component.component';

describe('CalculPrimeComponentComponent', () => {
  let component: CalculPrimeComponentComponent;
  let fixture: ComponentFixture<CalculPrimeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculPrimeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculPrimeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
