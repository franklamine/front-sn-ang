import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsideGauche } from './aside-gauche';

describe('AsideGauche', () => {
  let component: AsideGauche;
  let fixture: ComponentFixture<AsideGauche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideGauche],
    }).compileComponents();

    fixture = TestBed.createComponent(AsideGauche);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
