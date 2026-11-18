import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthPresentation } from './auth-presentation';

describe('AuthPresentation', () => {
  let component: AuthPresentation;
  let fixture: ComponentFixture<AuthPresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthPresentation],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthPresentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
