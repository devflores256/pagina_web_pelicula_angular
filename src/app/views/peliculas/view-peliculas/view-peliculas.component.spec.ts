import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPeliculasComponent } from './view-peliculas.component';

describe('ViewPeliculasComponent', () => {
  let component: ViewPeliculasComponent;
  let fixture: ComponentFixture<ViewPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPeliculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
