import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllUsersComponent } from './view-all-users.component';

describe('ViewAllUsersComponent', () => {
  let component: ViewAllUsersComponent;
  let fixture: ComponentFixture<ViewAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
