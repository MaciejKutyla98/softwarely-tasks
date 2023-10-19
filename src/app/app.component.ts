import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CustomerInfoService, IpActivityDates } from './customer-info.service';
import * as moment from 'moment';
import { Subscription, switchMap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @Input() userId: number = 0;

  private subscription: Subscription = new Subscription();

  latestActivityDate: string = '2023-10-19';

  constructor(private customerInfoService: CustomerInfoService) {}

  ngOnInit(): void {
    console.log('Iterative Fib: ', this.isMyFibonacci(1, 2, 7));
    console.log('Perfect square Fib: ', this.isMyFibonacciWithPerfectSquare(5, 7, 13));
    console.log(this.reduce([1,2,3], (acc, next) => acc + next, 10)); 

    this.getLatestActivityDate();
    }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }



  isMyFibonacci(firstValue: number, secondValue: number, testValue: number): boolean {
    if (firstValue < 0 || secondValue < 0 || testValue < 0) {
      return false;
    }

    if (testValue === firstValue  || testValue === secondValue) {
        return true;
    }

    let current: number = firstValue ;
    let nextTerm: number = secondValue ;

    while (nextTerm <= testValue) {
        if (testValue === nextTerm) {
            return true;
        }
        [current, nextTerm] = [nextTerm, current + nextTerm];

    }

    return false;
}

//Knowing that a number is Fibonacci if and only if one or both of (5*n2 + 4) or (5*n2 – 4) is a perfect square 
isMyFibonacciWithPerfectSquare(firstValue: number, secondValue: number, testValue: number): boolean {
  if (firstValue < 0 || secondValue < 0 || testValue < 0) {
    return false;
  }

  if (testValue < firstValue) {
    return false;
}

  return this.isPerfectSquare(5 * testValue * testValue + 4) || this.isPerfectSquare(5 * testValue * testValue - 4);
}

isPerfectSquare(givenNumber: number): boolean {
    const sqrtOfGivenNumberAsNaturalNumber: number = parseInt(Math.sqrt(givenNumber).toString());
    return (sqrtOfGivenNumberAsNaturalNumber * sqrtOfGivenNumberAsNaturalNumber == givenNumber);
}

reduce(arr: string | any[], callback: (arg0: any, arg1: any, arg2: number, arg3: any) => any , initialValue?: any): any {
  if (arr.length === 0 && initialValue === undefined) {
    throw new TypeError('Empty array with no initial value');
  }

  let accumulator: any = initialValue !== undefined ? initialValue : arr[0];
  let index: number = initialValue !== undefined ? 0 : 1;

  for (const element of arr.slice(index)) {
    accumulator = callback(accumulator, element, index, arr);
    index++;
  }

  return accumulator;
}
 
  private getLatestActivityDate(): void {
    this.subscription.add(
      this.customerInfoService
        .getCustomerIpById(this.userId)
          .pipe(
            switchMap((customerIp: string) => this.customerInfoService.getIpActivityDates(customerIp))
          )
            .subscribe((ipActivityDates: IpActivityDates) => {
              this.latestActivityDate = ipActivityDates?.latestDate;
            })
      )
  }

  formatDateAsHhMmSs(date: string): string {
    return moment(date).format('HH:mm:ss');
  }
}
