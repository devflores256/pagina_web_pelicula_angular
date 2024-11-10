import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPeliculasComponent } from './edit-peliculas.component';

describe('EditPeliculasComponent', () => {
  let component: EditPeliculasComponent;
  let fixture: ComponentFixture<EditPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPeliculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
