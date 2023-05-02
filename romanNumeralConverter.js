/**
 * Convert the given number into a roman numeral.
 * 
 * Roman numerrals/ Arabic numerals
 * M                1000
 * CM               900
 * D                500
 * CD               400
 * C                100
 * XC               90
 * L                50
 * XL               40
 * X                10
 * IX               9
 * V                5
 * IV               4
 * I                1
 * 
 * All roman numerals answers should be provided in upper-case.
 */

function convertToRoman(num) {
    const romanNumeralMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let result = '';
    for (let i in romanNumeralMap) {
        while (num >= romanNumeralMap[i]) {
            result += i;
            num -= romanNumeralMap[i];
        }
    }
    return result;
   }
   
   convertToRoman(36);