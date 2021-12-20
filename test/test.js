//Dependencies
const PJS = require("../index.js")

//Main
describe("PJS", ()=>{
    it("should stringify in a beautiful way", ()=>{
        expect(JSON.parse(PJS.pretty({ "test": "test" }))).toEqual({ "test": "test" })
    })
})