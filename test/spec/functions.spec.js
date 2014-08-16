describe('functions test', function () {

    'use strict';

    var answers = window.functions;

    describe('reverseNumber', function () {
        it('should reverse the number', function () {
            expect(answers.reverseNumber(1234)).toEqual(4321);
        });
        it('should reverse the number from "number string"', function () {
            expect(answers.reverseNumber('1234')).toBe(4321);
        });
        it('should not return a string', function () {
            expect(answers.reverseNumber(1234)).not.toBe('4321');
        });
        it('should not accept not number as an argument', function () {
            expect(answers.reverseNumber('abcs')).toBeFalsy();
        });
        it('should return single number', function () {
            expect(answers.reverseNumber(5)).toBe(5);
        });
    });

    describe('isPalindrom', function () {
        it('"kajak" should return true', function () {
            expect(answers.isPalindrome('kajak')).toBeTruthy();
        });
        it('"kajaki" should return false', function () {
            expect(answers.isPalindrome('kajaki')).toBeFalsy();
        });
        it('"kaaa4jaaak" should return false', function () {
            expect(answers.isPalindrome('kaaa4jaaak')).toBeFalsy();
        });
        it('"Kajak" should return true', function () {
            expect(answers.isPalindrome('Kajak')).toBeTruthy();
        });
        it('" " should return false', function () {
            expect(answers.isPalindrome(' ')).toBeFalsy();
        });
        it('"That tahT" should return true', function () {
            expect(answers.isPalindrome("That tahT")).toBeTruthy();
        });
    });

    describe('returnOnlyLetter', function () {
        it('should return only letter', function () {
            expect(answers.returnOnlyLetter('a4l1f5a')).toBe('a,l,f,a');
        });
        it('should return empty string', function () {
            expect(answers.returnOnlyLetter('45345')).toBe('');
        });
        it('number should return false', function () {
            expect(answers.returnOnlyLetter(45345)).toBeFalsy();
        });
    });

    describe('alphabetOrder', function () {
        it('should return letters in alphabetical order', function () {
            expect(answers.alphabetOrder('alfa')).toBe('a,a,f,l');
        });
        it('should return lower case letters in alphabetical order', function () {
            expect(answers.alphabetOrder('AlfA')).toBe('a,a,f,l');
        });
        it('should return only letters in alphabetical order', function () {
            expect(answers.alphabetOrder('A1l2f3a')).toBe('a,a,f,l');
        });

    });
    describe('upperCase', function () {
        it('should converts the first letter each word in upper case', function () {
            expect(answers.upperCase('This is a sentence')).toBe('This Is A Sentence');
        });
        it('should not change upper case letter', function () {
            expect(answers.upperCase('ThisIs Hard')).toBe('ThisIs Hard');
        });
        it('should not change punctuation', function () {
            expect(answers.upperCase('This is,m Hard')).toBe('This Is,m Hard');
        });
    });

    describe('findTheLongestWord', function () {
        it('should return the longest word in the string', function () {
            expect(answers.findTheLongestWord('This is the end of the world')).toEqual(['world']);
        });
        it('should return an array of the longest word in the string', function () {
            expect(answers.findTheLongestWord('This,i...i the@world of the world world')).toEqual(['world', 'world', 'world']);
        });
    });

    describe('vovelCount', function () {
        it('should return count of vovel', function () {
            expect(answers.vovelCount('One Two ThreeE')).toBe(6);
        });
        it('number should be omnitted', function () {
            expect(answers.vovelCount('EAioioi23123123uyI')).toBe(10);
        });
    });

    describe('isPrimeNumber', function () {
        it('11 should return true', function () {
            expect(answers.isPrimeNumber(11)).toBeTruthy();
        });
        it('21 should return false', function () {
            expect(answers.isPrimeNumber(21)).toBeFalsy();
        });
    });
    describe('whaType', function () {
        var variable12,
            p = { x: 10 };

        it('"str" should return "string"', function () {
            expect(answers.whatType('str')).toEqual('string');
        });
        it('"str.length" should return "number"', function () {
            expect(answers.whatType("str".length)).toEqual('number');
        });
        it('should return "object"', function () {
            expect(answers.whatType(p)).toEqual('object');
        });
        it('only declared variable should return "undefined"', function () {
            expect(answers.whatType(variable12)).toEqual('undefined');
        });
    });

    describe('matrix', function () {
        it('should return matrix n x n', function () {
            expect(answers.matrix(2)).toEqual([
                [1, 2],
                [2, 4]
            ]);
        });
        it('"str" should return false', function () {
            expect(answers.matrix("str")).toBeFalsy();
        });
        it('"20.9" should return false', function () {
            expect(answers.matrix("20.9")).toBeFalsy();
        });
    });
});