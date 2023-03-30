import { CalculatorService } from "./calculator.service";
import { TestBed } from "@angular/core/testing"
import { LoggerService } from "./logger.service";

// xdescribe('CalculatorService', () => {
// fdescribe('CalculatorService', () => {
describe('CalculatorService', () => {
    let calculator: CalculatorService, loggerSpy: any;
    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);
        TestBed.configureTestingModule({
            providers: [ 
                CalculatorService, 
                { provide: LoggerService, useValue: loggerSpy}
            ]
        })
        calculator = TestBed.get(CalculatorService);
    })

    it('should add two numbers', ()=> {
        const result = calculator.add(2,2);
        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    })

    // xit('should substract two numbers', ()=> {
    // fit('should substract two numbers', ()=> {
    it('should substract two numbers', ()=> {
        const result = calculator.subtract(2,2);
        expect(result).toBe(0, "unexpected substraction result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    })
})