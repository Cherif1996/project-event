import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuComponent } from './venu.component';

describe('VenuComponent', () => {
  let component: VenuComponent;
  let fixture: ComponentFixture<VenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
