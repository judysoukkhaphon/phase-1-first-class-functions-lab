// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let firstTwo = drivers.slice(0,2);
    return firstTwo;
}

const returnLastTwoDrivers = function(drivers) {
    let lastTwo = drivers.slice(-2);
    return lastTwo;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    const fareMultiplier = function(fare){
        let result = fare * int;
        return result;
    }
    return fareMultiplier;
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    const result = fare * 3;
    return result;
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}




/**createFareMultiplier() — This is a higher-order function that takes in 
 * one argument, an integer, and returns a function that will multiply a 
 * fare for a ride accordingly. For example, if createFareMultiplier() 
 * receives an argument of 4, it will return a function that takes in a 
 * fare as an argument and quadruples the fare.
 * 
 * fareDoubler() — Declare a variable with const and assign a function 
 * returned by createFareMultiplier() to it. Invoke createFareMultiplier() 
 * in such a way that the new fareDoubler() function accepts a fare as 
 * its lone argument and doubles it.
 * 
fareTripler() — Declare a variable with const and assign a function 
returned by createFareMultiplier() to it. 
Invoke createFareMultiplier() in such a way that the new 
fareTripler() function accepts a fare as its lone argument and triples it.
selectDifferentDrivers() — This function takes two arguments, an array of 
the names of Scuber's drivers and either the returnFirstTwoDrivers() or 
returnLastTwoDrivers() function. Based on these two arguments, 
selectDifferentDrivers() will return either the first two drivers 
or the last two drivers. */