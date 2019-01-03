import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatViewComponent } from './resultat-view.component';

describe('ResultatViewComponent', () => {
  let component: ResultatViewComponent;
  let fixture: ComponentFixture<ResultatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
