import {Main} from './passwordChecker.js';

describe("Checking if password has 8 Char", function(){
    const main = new Main();

    it("has8char : when has 0 char", function(){
        const result = Main.has8char("");
        expect(result).toBe(false);
    });
});



