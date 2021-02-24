const { test, expect } = require("@jest/globals");
const { describe } = require("yargs");

let MyroslavPromise = require('./promise')
 
describe('Myroslav Promise', () => {

    test('should exist and to be typeof function', () => {
        expect(MyroslavPromise).toBeDefined()
        expect(typeof MyroslavPromise).toBe('function')
    })

})