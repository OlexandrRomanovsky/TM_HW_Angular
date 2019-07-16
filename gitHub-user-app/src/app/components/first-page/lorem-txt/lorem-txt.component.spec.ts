import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremTxtComponent } from './lorem-txt.component';

describe('LoremTxtComponent', () => {
  let component: LoremTxtComponent;
  let fixture: ComponentFixture<LoremTxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoremTxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoremTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
