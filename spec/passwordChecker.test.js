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

    it("hasSpecialChar : when has 1 special char", function(){
        const result = Main.hasSpecialChar("!");
        expect(result).toBe(true);
    });
    it("hasNumber: when has 0 number", function(){
        const result = Main.hasNumber("");
        expect(result).toBe(false);
    });
    it("hasNumber: when has 1 number", function(){
        const result = Main.hasNumber("1");
        expect(result).toBe(true);
    });
    it("noIpl: when hasn't ipl", function(){
        const result = Main.noIpl("");
        expect(result).toBe(true);
    });
    it("noIpl: when has ipl", function(){
        const result = Main.noIpl("ipl");
        expect(result).toBe(false);
    });
    it("passwordChecker : when password isn't good", function(){
        const result = Main.passwordChecker("abvcdfipl");
        expect(result).toBe(false);
    });
    


});