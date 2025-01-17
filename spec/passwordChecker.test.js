import {Main} from './passwordChecker.js';

describe("Checking if password has 8 Char", function(){
    const main = new Main();

    it("has8char : when has 0 char", function(){
        const result = Main.has8char("");
        expect(result).toBe(false);
    });

    it("has8char : when has 1 char", function(){
        const result = Main.has8char("a");
        expect(result).toBe(false);
    });
    it("has8char : when has 8 char", function(){
        const result = Main.has8char("abcdefgh");
        expect(result).toBe(true);
    });

    it("hasSpecialChar : when has 0 special char", function(){
        const result = Main.hasSpecialChar("");
        expect(result).toBe(false);
    });



});