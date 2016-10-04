"use strict";

import {expect} from "chai";
import App from "../src/app.js";

describe("App", () => { //function that gives you key value pair, key is what you are describing, arrow function
    it("shall exist", () => {
        let app = new App();

        expect(app).to.be.defined;
    });

    it("shall have a run method", () => {
        let app = new App();

        expect(app.run()).to.be.true;
    });
});



//these are roughly the same
//function() {}
//() => {} //handles this differently

