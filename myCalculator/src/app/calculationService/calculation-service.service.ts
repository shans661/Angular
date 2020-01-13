import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationServiceService {

  constructor() { }

  add(x:number, y:number) : number {
    return x + y;
  }

  subtract(x:number, y:number) : number {
    return x - y;
  }

  multiply(x:number, y:number) : number {
    return x * y;
  }

  devide(x:number, y:number) : number {
    return x / y;
  }
}
