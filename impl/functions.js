(function () {
    'use strict';

    window.functions = {
        /*(1) Write function that reverse a number[1]*/
        reverseNumber: function (num) {
            if (isNaN(num)) {
                return false;
            }
            num += "";
            return parseInt(num.split("").reverse().join(""));
        },

        /*(2) Write function that checks is string a palindrome or not[2]*/
        isPalindrome: function (str) {
            var strTemp = str.toLowerCase(),
                strLength = strTemp.length;

            if (str === " ") {
                return false;
            }
            //jeśli długość stringu jest liczbą parzystą to podziel ją przez dwa i przypisz do halfLength
            //jeśli długość stringu jest liczbą nieparzystą to pomniejsz ją o jeden, podziel przez dwa i przypisz do halfLength
            var halfLength = (strLength % 2 === 0) ? (strLength / 2) : ((strLength - 1) / 2);

            for (var i = 0; i < halfLength; i++) {
                //jeśli znak o indeksie "i" w stringu jest różny od (ostatniego_znaku-i) to string nie jest palindromem
                if (strTemp[i] !== strTemp.slice(-1 - i)[0]) {
                    return false;
                }
            }
            return true;

        },
        /*(3) Write function that from string return only letters in string [#1]*/
        returnOnlyLetter: function (str) {
            if (typeof str !== 'string') {
                return false;
            }
            var temp = str.split(""),
                az = /^[a-z]/,
                outputArray = [];

            for (var i = 0, x = temp.length; i < x; i++) {
                if (az.test(temp[i])) { //sprawdza czy kolejne znaki znajduja sie w przedziale "az"
                    outputArray.push(temp[i]);
                }
            }
            return outputArray.join("");
        },

        /*(4) Write function that returns letters in alphabetical order [4]*/
        alphabetOrder: function (str) {
            return this.returnOnlyLetter(str.toLowerCase().split("").sort().join());
        },

        /*(5) Write function that converts the first letter of each word of the string in upper case[5]*/
        upperCase: function (str) {
            var strTmp = str.split(" ");
            var outputArray = [];

            for (var i = 0, strLength = strTmp.length; i < strLength; i++) {
                /*dodaje do tablicy outputArray element, który składa się
                 z pierwszej litery "i-tego" elementu tablicy oraz "i-tego"
                 elementu tablicy pozbawionego pierwszej litery
                 */
                outputArray.push(strTmp[i][0].toUpperCase() + strTmp[i].slice(1));
            }
            return outputArray.join(" ");
        },

        /*(6) Write function that find the longest word within the string [6]*/
        findTheLongestWord: function (str) {

            /*match() - przyjmuje jako argument wyrażenie regularne
             *\w jakikolwiek znak alfanumeryczny
             *wszystkie litery z zakresu [a-z] co najmniej 0 lub więcej wystąpień */
            var inputArray = str.match(/\w[a-z]{0,}/gi),
                tempLength = inputArray[0].length,
                outputArray = inputArray[0];

            for (var i = 1, inputLength = inputArray.length; i < inputLength; i++) {
                if (inputArray[i].length > tempLength) {
                    outputArray = [];
                    outputArray.push(inputArray[i]);
                    tempLength = inputArray[i].length;
                }
                else if (inputArray[i].length == tempLength) {
                    outputArray.push(inputArray[i]);
                }
            }
            return outputArray;
        },

        /*(7) Write a function that counts the number of vowels within the string [7]*/
        vovelCount: function (str) {
            var vovelList = 'aeiouyAEIOUY',
                vovCount = 0;
            for (var i = 0, strLength = str.length; i < strLength; i++) {
                /*array.indexOf(searchElement[,fromIndex]);*/
                if (vovelList.indexOf(str[i]) !== -1) {
                    vovCount++;
                }
            }
            return vovCount;
        },

        /*(8) Write a function that checks is the number a prime number [8]*/
        isPrimeNumber: function (num) {
            if (num === 0 || num == 1) {
                return false;
            }
            else if (num === 2) {
                return true;
            }
            for (var i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        },
        /*(9) Write a function which accepts an argument and returns the type [9]*/
        whatType: function (arg) {
            return typeof(arg);
        },

        /*(10) Write a function which returns the n rows by n columns identity matrix [#2]*/
        matrix: function (n) {
            if (typeof n != 'number') {
                return false;
            }
            var outputArray = [];
            for (var i = 0; i < n; i++) {
                outputArray[i] = [];
                for (var j = 0; j < n; j++) {
                    outputArray[i][j] = ((i + 1) * (j + 1));
                }
            }
            return outputArray;
        },
        /*(11) Write a function which returns max value of array [#3]*/
        findMax: function (arr) {
            var arrLength = arr.length;
            if (arr.length == 0) {
                return false;
            }

            var newArray = [];
            for (var i = 0; i < arrLength; i++) {
                if (typeof arr[i] === 'number') {
                    newArray.push(arr[i]);
                }
            }
            var max = newArray[0];
            for (var j = 0, newArrayLength = newArray.length; j < newArrayLength; j++) {
                if (newArray[j] > max) {
                    max = newArray[j];
                }
            }
            return max;
        },
        /*(12) Write a function which returns min value of array [#4]*/
        findMin: function (arr) {
            var arrLength = arr.length;
            if (arrLength == 0) {
                return false;
            }

            var newArray = [];
            for (var i = 0; i < arrLength; i++) {
                if (typeof arr[i] === 'number') {
                    newArray.push(arr[i]);
                }
            }
            var min = newArray[0];
            for (var j = 0, newArrayLength = newArray.length; j < newArrayLength; j++) {
                if (newArray[j] < min) {
                    min = newArray[j];
                }
            }
            return min;

        },

        /*(13) Write function which will take an array of numbers and find second greatest number [10] */
        findAlmostMax: function (arr) {
            var arrLength = arr.length;
            if (arrLength == 0) {
                return false;
            }

            var tmpArray = [];
            for (var i = 0; i < arrLength; i++) {
                if (typeof arr[i] == 'number') {
                    tmpArray.push(arr[i]);
                }
                if (tmpArray.length == 0) {
                    return false;
                }
            }
            return tmpArray.sort()[tmpArray.length - 2];
        },
        /*(14) Write function which will take an array of numbers and find second lowest number [10] */
        findAlmostMin: function (arr) {
            var arrLength = arr.length;
            if (arrLength == 0) {
                return false;
            }

            var tmpArray = [];
            for (var i = 0; i < arrLength; i++) {
                if (typeof arr[i] == 'number') {
                    tmpArray.push(arr[i]);
                }
            }
            if (tmpArray.length == 0) {
                return false;
            }
            return arr.sort()[1];
        },
        /*(15) Write a JavaScript function to extract unique characters from a string [16]*/
        findUniqueChart: function (str) {
            var onlyLetter = this.returnOnlyLetter(str),
                uniqueLetter = [];
            for (var i = 0, oLength = onlyLetter.length; i < oLength; i++) {
                if ((uniqueLetter.indexOf(onlyLetter.charAt(i))) == -1) {
                    uniqueLetter.push(onlyLetter[i]);
                }
            }
            return uniqueLetter.join("");
        }
    };
})();