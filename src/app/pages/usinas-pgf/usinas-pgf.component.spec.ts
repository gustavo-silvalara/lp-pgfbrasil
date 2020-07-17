import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsinasPgfComponent } from './usinas-pgf.component';

describe('UsinasPgfComponent', () => {
  let component: UsinasPgfComponent;
  let fixture: ComponentFixture<UsinasPgfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsinasPgfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsinasPgfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
