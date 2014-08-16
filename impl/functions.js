(function () {
    'use strict';

    window.functions = {
        /*Write function that reverse a number[1]*/
        reverseNumber: function (num) {
            if (isNaN(num)) {
                return false;
            }
            num += "";
            return parseInt(num.split("").reverse().join(""));
        },

        /*Write function that checks is string a palindrome or not[2]*/
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
        /*Write function that from string return only letters in string [my own]*/
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
            return outputArray.join();
        },

        /*Write function that returns letters in alphabetical order [4]*/
        alphabetOrder: function (str) {
            return this.returnOnlyLetter(str.toLowerCase().split("").sort().join());
        },

        /*Write function that converts the first letter of each word of the string in upper case[5]*/
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

        /*Write function that find the longest word within the string [6]*/
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

        /*Write a function that counts the number of vowels within the string [7]*/
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

        /*Write a function that checks is the number a prime number [8]*/
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
        /*Write a function which accepts an argument and returns the type [9]*/
        whatType: function (arg) {
            return typeof(arg);
        },

        /*Write a function which returns the n rows by n coluns identity matrix [my own]*/
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
        }
    };
})();