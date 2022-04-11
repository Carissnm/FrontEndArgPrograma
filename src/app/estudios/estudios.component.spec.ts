import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosComponent } from './estudios.component';

describe('EstudiosComponent', () => {
  let component: EstudiosComponent;
  let fixture: ComponentFixture<EstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
