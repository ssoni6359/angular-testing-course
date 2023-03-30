import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {
    let calculator: CalculatorService, loggerSpy: any;
    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);
        calculator = new CalculatorService(loggerSpy);

        console.log("Calling beforeEach");
    })

    it('should add two numbers', ()=> {
        // const logger = jasmine.createSpyObj('LoggerService', ["log"]);
        // const calculator = new CalculatorService(logger);
        console.log("Add Test");

        const result = calculator.add(2,2);
        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    })

    it('should substract two numbers', ()=> {
        // const logger = jasmine.createSpyObj('LoggerService', ["log"]);
        // const calculator = new CalculatorService(logger);
        console.log("Substract Test");


        const result = calculator.subtract(2,2);
        expect(result).toBe(0, "unexpected substraction result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    })
})