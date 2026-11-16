import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsideDroite } from './aside-droite';

describe('AsideDroite', () => {
  let component: AsideDroite;
  let fixture: ComponentFixture<AsideDroite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideDroite],
    }).compileComponents();

    fixture = TestBed.createComponent(AsideDroite);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
