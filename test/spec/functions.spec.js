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
            expect(answers.reverseNumber('abcs')).toEqual(false);
        });
        it('should return single number', function () {
            expect(answers.reverseNumber(5)).toBe(5);
        });
    });

    describe('isPalindrom', function () {
        it('"kajak" should return true', function () {
            expect(answers.isPalindrome('kajak')).toEqual(true);
        });
        it('"kajaki" should return false', function () {
            expect(answers.isPalindrome('kajaki')).toEqual(false);
        });
        it('"kaaa4jaaak" should return false', function () {
            expect(answers.isPalindrome('kaaa4jaaak')).toEqual(false);
        });
        it('"Kajak" should return true', function () {
            expect(answers.isPalindrome('Kajak')).toEqual(true);
        });
        it('" " should return false', function () {
            expect(answers.isPalindrome(' ')).toEqual(false);
        });
        it('"That tahT" should return true', function () {
            expect(answers.isPalindrome("That tahT")).toEqual(true);
        });
    });

    describe('returnOnlyLetter', function () {
        it('should return only letter', function () {
            expect(answers.returnOnlyLetter('a4l1f5a')).toBe('alfa');
        });
        it('should return empty string', function () {
            expect(answers.returnOnlyLetter('45345')).toBe('');
        });
        it('number should return false', function () {
            expect(answers.returnOnlyLetter(45345)).toEqual(false);
        });
    });

    describe('alphabetOrder', function () {
        it('should return letters in alphabetical order', function () {
            expect(answers.alphabetOrder('alfa')).toBe('aafl');
        });
        it('should return lower case letters in alphabetical order', function () {
            expect(answers.alphabetOrder('AlfA')).toBe('aafl');
        });
        it('should return only letters in alphabetical order', function () {
            expect(answers.alphabetOrder('A1l2f3a')).toBe('aafl');
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
            expect(answers.isPrimeNumber(11)).toEqual(true);
        });
        it('21 should return false', function () {
            expect(answers.isPrimeNumber(21)).toEqual(false);
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
            expect(answers.matrix("str")).toEqual(false);
        });
        it('"20.9" should return false', function () {
            expect(answers.matrix("20.9")).toEqual(false);
        });
    });

    describe('findMax', function () {
        it('should return max value in array', function () {
            expect(answers.findMax([1, 2, 3, 4])).toBe(4);
        });
        it('should return max value in array', function () {
            expect(answers.findMax([100, 10, 20, 30])).toBe(100);
        });
        it('string should be omnitted', function () {
            expect(answers.findMax([100, 'ala', 'kot', 200])).toBe(200);
        });
        it('string should be omnitted', function () {
            expect(answers.findMax(['ala', 100, 'kot', 200])).toBe(200);
        });
        it('empty array should return false', function () {
            expect(answers.findMax([])).toEqual(false);
        });

    });

    describe('findMin', function () {
        it('should return min value in array', function () {
            expect(answers.findMin([1, 2, 3, 4])).toBe(1);
        });
        it('should return min value in array', function () {
            expect(answers.findMin([100, 10, 20, 30])).toBe(10);
        });
        it('string should be omnitted', function () {
            expect(answers.findMin([100, 'ala', 'kot', 200])).toBe(100);
        });
        it('string should be omnitted', function () {
            expect(answers.findMin(['ala', 100, 'kot', 200])).toBe(100);
        });
        it('empty array should return false', function () {
            expect(answers.findMin([])).toEqual(false);
        });
    });

    describe('findAlmostMax', function () {
        it('should return second greatest number', function () {
            expect(answers.findAlmostMax([2, 3, 4])).toBe(3);
        });
        it('should return second greatest number', function () {
            expect(answers.findAlmostMax([50, 40, 30, 10])).toBe(40);
        });
        it('string should be omnitted', function () {
            expect(answers.findAlmostMax([50, 'str', 30, 10])).toBe(30);
        });
        it('empty array should return false', function () {
            expect(answers.findAlmostMax([])).toEqual(false);
        });
        it('array of string should return false', function () {
            expect(answers.findAlmostMax(['cat', 'kot'])).toEqual(false);
        });
    });

    describe('findAlmostMin', function () {
        it('should return second lowest number', function () {
            expect(answers.findAlmostMin([1, 2, 3, 4, 5, 6])).toBe(2);
        });
        it('should return second lowest number', function () {
            expect(answers.findAlmostMin([50, 40, 30, 10])).toBe(30);
        });
        it('string should be omnitted', function () {
            expect(answers.findAlmostMin([50, 'str', 30, 10])).toBe(30);
        });
        it('empty array should return false', function () {
            expect(answers.findAlmostMin([])).toEqual(false);
        });
        it('array of string should return false', function () {
            expect(answers.findAlmostMin(['cat', 'kot'])).toEqual(false);
        });
    });
    describe('findUniqueChart', function () {
        it('should return unique chart', function () {
            expect(answers.findUniqueChart('hahahahaha')).toBe('ha');
        });
        it('number should return empty string', function () {
            expect(answers.findUniqueChart(123)).toBe('');
        });
        it('"number string" should return empty string', function () {
            expect(answers.findUniqueChart('321')).toBe('');
        });
        it('"qwertyuiopasdfghjklzxcvbnm" should return "qwertyuiopasdfghjklzxcvbnm"', function () {
            expect(answers.findUniqueChart('qwertyuiopasdfghjklzxcvbnm')).toBe('qwertyuiopasdfghjklzxcvbnm');
        });

    });


});