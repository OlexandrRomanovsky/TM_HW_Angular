import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderPhotoComponent } from './render-photo.component';

describe('RenderPhotoComponent', () => {
  let component: RenderPhotoComponent;
  let fixture: ComponentFixture<RenderPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
