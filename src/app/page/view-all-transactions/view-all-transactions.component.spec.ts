import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTransactionsComponent } from './view-all-transactions.component';

describe('ViewAllTransactionsComponent', () => {
  let component: ViewAllTransactionsComponent;
  let fixture: ComponentFixture<ViewAllTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllTransactionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
