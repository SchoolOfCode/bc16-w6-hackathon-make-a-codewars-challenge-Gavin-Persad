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
    test("501 should return No finish possible", function (){
    //Arrange
    const currentScore = 501;
    const expected = "No finish possible";
    //Act
    const actual = canIFinish(currentScore);
    //Assert
    expect(actual).toBe(expected);
    });

    // 170 test
    test("170 should return 170", function (){
    //Arrange
    const currentScore = 170;
    const expected = 170;
    //Act
    const actual = canIFinish(currentScore);
    //Assert
    expect(actual).toBe(expected);
    });

    // 171 boundary test
    test("171 should return No finish possible", function (){
    //Arrange
    const currentScore = 171;
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

    // 169 lowest not possible under 170 out test
    test("169 should return No finish possible", function (){
    //Arrange
    const currentScore = 169;
    const expected = "No finish possible";
    //Act
    const actual = canIFinish(currentScore);
    //Assert
    expect(actual).toBe(expected);
    });

    // 167 highest possible out test
     test("167 should return 167", function (){
    //Arrange
    const currentScore = 167;
    const expected = 167;
    //Act
    const actual = canIFinish(currentScore);
    //Assert
    expect(actual).toBe(expected);
    });

    // Random tests
    test("132 should return 132", function (){
    //Arrange
    const currentScore = 132;
    const expected = 132;
    //Act
    const actual = canIFinish(currentScore);
    //Assert
    expect(actual).toBe(expected);
    });


    // Random tests
    test("285 should return No finish possible", function (){
    //Arrange
    const currentScore = 285;
    const expected = "No finish possible";
    //Act
    const actual = canIFinish(currentScore);
    //Assert
    expect(actual).toBe(expected);
    });