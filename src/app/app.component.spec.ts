import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should return true for perfect square numbers', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
  
    expect(app.isPerfectSquare(1)).toBe(true);
    expect(app.isPerfectSquare(4)).toBe(true);
    expect(app.isPerfectSquare(9)).toBe(true);
    expect(app.isPerfectSquare(16)).toBe(true);
  });
  
  it('should return false for non-perfect square numbers', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
  
    expect(app.isPerfectSquare(2)).toBe(false);
    expect(app.isPerfectSquare(3)).toBe(false);
    expect(app.isPerfectSquare(8)).toBe(false);
  });

  it('should return false for negative inputs', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
  
    expect(app.isMyFibonacci(-1, 5, 7)).toBe(false);
    expect(app.isMyFibonacci(2, -5, 7)).toBe(false);
    expect(app.isMyFibonacci(2, 5, -7)).toBe(false);

    expect(app.isMyFibonacciWithPerfectSquare(-1, 5, 7)).toBe(false);
    expect(app.isMyFibonacciWithPerfectSquare(2, -5, 7)).toBe(false);
    expect(app.isMyFibonacciWithPerfectSquare(2, 5, -7)).toBe(false);
  });
  
  it('should return false if testValue is less than firstValue', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
  
    expect(app.isMyFibonacci(5, 8, 4)).toBe(false);
    expect(app.isMyFibonacci(2, 5, 1)).toBe(false);
    expect(app.isMyFibonacci(0, 0, -3)).toBe(false);

    expect(app.isMyFibonacciWithPerfectSquare(5, 8, 4)).toBe(false);
    expect(app.isMyFibonacciWithPerfectSquare(2, 5, 1)).toBe(false);
    expect(app.isMyFibonacciWithPerfectSquare(0, 0, -3)).toBe(false);
  });
  
  it('should return true for numbers in the Fibonacci sequence', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
  
    expect(app.isMyFibonacci(1, 1, 2)).toBe(true);
    expect(app.isMyFibonacci(2, 3, 5)).toBe(true);
    expect(app.isMyFibonacci(1, 2, 3)).toBe(true);

    expect(app.isMyFibonacciWithPerfectSquare(1, 1, 2)).toBe(true);
    expect(app.isMyFibonacciWithPerfectSquare(2, 3, 5)).toBe(true);
    expect(app.isMyFibonacciWithPerfectSquare(1, 2, 3)).toBe(true);
  });
  
  it('should return false for numbers not in the Fibonacci sequence', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
  
    expect(app.isMyFibonacci(2, 5, 4)).toBe(false);
    expect(app.isMyFibonacci(3, 5, 10)).toBe(false);
    expect(app.isMyFibonacci(1, 2, 7)).toBe(false);

    expect(app.isMyFibonacciWithPerfectSquare(2, 5, 4)).toBe(false);
    expect(app.isMyFibonacciWithPerfectSquare(3, 5, 10)).toBe(false);
    expect(app.isMyFibonacciWithPerfectSquare(1, 2, 7)).toBe(false);
  });



  it('should throw an error for an empty array with no initial value', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
  
    expect(() => app.reduce([], (acc, curr) => acc + curr)).toThrowError('Empty array with no initial value');
  });

  it('should correctly reduce an array of numbers with an initial value', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
  
    const numbers: number[] = [1, 2, 3, 4, 5];
    const initialValue: number = 10;
    const result: number = app.reduce(numbers, (acc, curr) => acc + curr, initialValue);
    expect(result).toBe(25);
  });

  it('should correctly reduce an array of strings without an initial value', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
  
    const strings: string[] = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', 'l', 'y'];
    const result: string = app.reduce(strings, (acc, curr) => acc + curr);
    expect(result).toBe('softwarely');
  });

  it('should correctly reduce an array of objects', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
  
    const objects: object[] = [{ value: 1 }, { value: 2 }, { value: 3 }];
    const result: number = app.reduce(objects, (acc, curr) => acc + curr.value, 0);
    expect(result).toBe(6);
  });
});
