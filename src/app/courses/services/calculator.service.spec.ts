import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {
    it('should add two numbers', ()=> {

        /* Actual Implemetation of Dependent Service
         *   const logger = new LoggerService();
         *   spyOn(logger, 'log');
        */

        //Fake Implemetaion of Logger Service
        const logger = jasmine.createSpyObj('LoggerService', ["log"]);

        // logger.log.and.returnValue();

        const calculator = new CalculatorService(logger);
        const result = calculator.add(2,2);

        expect(result).toBe(4);
        expect(logger.log).toHaveBeenCalledTimes(1);
    })

    it('should substract two numbers', ()=> {
        const calculator = new CalculatorService(new LoggerService());
        const result = calculator.subtract(2,2);
        expect(result).toBe(0, "unexpected substraction result");
    })
})