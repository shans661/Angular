import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorKeyBoardComponent } from './calculator-key-board.component';

describe('CalculatorKeyBoardComponent', () => {
  let component: CalculatorKeyBoardComponent;
  let fixture: ComponentFixture<CalculatorKeyBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorKeyBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorKeyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
