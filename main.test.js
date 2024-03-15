import { expect, test } from 'vitest';
import { canIFinish } from "./main.js";

//bare bones test
test("bare bones", function (){
    //Arrange
    const a = 1;
    const b = 2;
    const expected = 3;
    //Act
    const actual = a + b;
    //Assert
    expect(actual).toBe(expected);
    });

    //501 test
test("501 should return no  possible", function (){
    //Arrange
    const currentScore = 501;
    const expected = "No finish possible";
    //Act
    const actual = canIFinish(currentScore);
    //Assert
    expect(actual).toBe(expected);
    });

    