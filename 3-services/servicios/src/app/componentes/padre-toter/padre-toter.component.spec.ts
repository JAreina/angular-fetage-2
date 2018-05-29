import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreToterComponent } from './padre-toter.component';

describe('PadreToterComponent', () => {
  let component: PadreToterComponent;
  let fixture: ComponentFixture<PadreToterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreToterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreToterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
