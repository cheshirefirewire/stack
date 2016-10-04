"use strict";

import {expect} from "chai";
import Stack from "../src/stack.js";

describe("Stack", () => {
    it("shall exist", () => {
        let stack = new Stack();

        expect(stack).to.be.defined;
    });


    it("should return true if empty", () => {
        let stack = new Stack();

        expect(stack.isEmpty()).to.be.true;
    });


    it("shall have to the ability to push items to itself", () => {
       let stack = new Stack();

        expect(stack.size()).to.equal(0);

        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.size()).to.equal(3);
    });
});