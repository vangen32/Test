import * as Classes from "./repository.js"
describe('Repository', () => {
    it('should do something', () => {
        expect.assertions(2);
        let Sashko = new Classes.Sanya();
        let a = Sashko.shlunok.length;
        Sashko.eat("Saverma");

        expect(Sashko.shlunok.length === a+1).toBe(true);
        expect(Sashko.shlunok[0]).toBe("Saverma");
    });
});