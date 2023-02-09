

// Since we have exported as const sum not default sum so, we use named export.
import {sum} from "../sum"




test("Check sum of 2 postive numbers", () => {
    // Every test case should have an expectation or assertion
    // We expect from this test is to call our sum function with 2 postive number and to return something
        expect(sum(2,5)).toBe(7); // The sum function will come from sum file.
} )



// test(1st argument, 2nd argument), ==> 1st argument, Name of our test
// 2nd argument,  is a function is a code that the test case will execute