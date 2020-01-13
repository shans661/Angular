import { Component, OnInit } from '@angular/core';
import { CalculationServiceService } from '../calculationService/calculation-service.service';

@Component({
  selector: 'app-calculator-key-board',
  templateUrl: './calculator-key-board.component.html',
  styleUrls: ['./calculator-key-board.component.css']
})
export class CalculatorKeyBoardComponent implements OnInit {

  private number1: string ='';
  private number2: string ='';
  private operator: string ='';
  expressinToDisplay: string ='';
  resultToDisplay: number;
  constructor(private calculatorService: CalculationServiceService) { }

  ngOnInit() {
  }

  numberPadClick(num: string) {
    this.expressinToDisplay='';
    if(this.number1==='' || this.operator ==='') {
    this.number1 += num;
    } else {
      this.number2 +=num;
    }
    this.expressinToDisplay += this.number1 + this.operator + this.number2;
  }

  operatorClick(operator: string) {    
    if (this.number2) {
      this.operation();
      this.number1 = this.resultToDisplay.toString();
      this.number2='';
    }
    this.expressinToDisplay='';
    this.operator =  operator;
    this.expressinToDisplay = this.number1 + this.operator + this.number2;
  }

  operation() {
    switch(this.operator) {
      case '+':
        this.resultToDisplay = this.calculatorService.add(+this.number1, +this.number2);
        break;
        case '-':
          this.resultToDisplay = this.calculatorService.subtract(+this.number1, +this.number2);
          break;
        case '*':
          this.resultToDisplay = this.calculatorService.multiply(+this.number1, +this.number2);
        break;
        case '/':
          this.resultToDisplay = this.calculatorService.devide(+this.number1, +this.number2);
          break;
    }
  }

  clear() {

  }
}
