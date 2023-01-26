import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUsageComponent } from './userusage.component';

describe('UserusageComponent', () => {
  let component: UserUsageComponent;
  let fixture: ComponentFixture<UserUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserUsageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
