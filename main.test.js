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
    test("501 should return no finish possible", function (){
    //Arrange
    const currentScore = 501;
    const expected = "No finish possible";
    //Act
    const actual = canIFinish(currentScore);
    //Assert
    expect(actual).toBe(expected);
    });

    // 180 test
    test("180 should return 180", function (){
    //Arrange
    const currentScore = 180;
    const expected = 180;
    //Act
    const actual = canIFinish(currentScore);
    //Assert
    expect(actual).toBe(expected);
    });

    // 181 boundary test
    test("180 should return 180", function (){
    //Arrange
    const currentScore = 181;
    const expected = "No finish possible";
    //Act
    const actual = canIFinish(currentScore);
    //Assert
    expect(actual).toBe(expected);
    });

    // 1 lowest not possible out test
    test("1 should return No finish possible", function (){
    //Arrange
    const currentScore = 1;
    const expected = "No finish possible";
    //Act
    const actual = canIFinish(currentScore);
    //Assert
    expect(actual).toBe(expected);
    });
        
   // 2 lowest possible out test
   test("2 should return 2", function (){
    //Arrange
    const currentScore = 2;
    const expected = 2;
    //Act
    const actual = canIFinish(currentScore);
    //Assert
    expect(actual).toBe(expected);
    });

    // 179 lowest not possible under 180 out test
    test("179 should return No finish possible", function (){
    //Arrange
    const currentScore = 179;
    const expected = "No finish possible";
    //Act
    const actual = canIFinish(currentScore);
    //Assert
    expect(actual).toBe(expected);
    });

    // 177 highest possible out test
     test("177 should return 177", function (){
    //Arrange
    const currentScore = 177;
    const expected = 177;
    //Act
    const actual = canIFinish(currentScore);
    //Assert
    expect(actual).toBe(expected);
    });