import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisDetailComponent } from './pais-detail.component';

describe('PaisDetailComponent', () => {
  let component: PaisDetailComponent;
  let fixture: ComponentFixture<PaisDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaisDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
