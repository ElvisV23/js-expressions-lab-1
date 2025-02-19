//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};
const day1TempF = 32
const day1TempC = (day1TempF - 32) * 5 /9;

console.log(day1TempC); //output :0

const day2TempC = 25
const day2TempF = (day2TempC * 9 / 5) + 32

console.log(day2TempF);

const day3TempF = 70
const day3TempC = (day3TempF - 32) * 5 /9;

console.log(day3TempC);

const day4TempC = 18
const day4TempF = (day4TempC * 9 / 5) + 32

console.log(day4TempF);


const day5TempF = 80
const day5TempC = (day5TempF - 32) * 5 /9;

console.log(day5TempC);

const day6TempC = 15
const day6TempF = (day6TempC * 9 / 5) + 32

console.log(day6TempF);


const day7TempF = 72
const day7TempC = (day7TempF - 32) * 5 /9;

console.log(day7TempC);

const day8TempC = 28
const day8TempF = (day8TempC * 9 / 5) + 32

console.log(day8TempF);


const day9TempF = 68
const day9TempC = (day9TempF - 32) * 5 /9;

console.log(day9TempC);

const day10TempC = 20
const day10TempF = (day10TempC * 9 / 5) + 32

console.log(day10TempF);


const day11TempF = 75
const day11TempC = (day11TempF - 32) * 5 /9;

console.log(day11TempC);

const day12TempC = 23
const day12TempF = (day12TempC * 9 / 5) + 32

console.log(day12TempF);


const day13TempF = 82
const day13TempC = (day13TempF - 32) * 5 /9;

console.log(day13TempC);

const day14TempC = 30
const day14TempF = (day14TempC * 9 / 5) + 32

console.log(day14TempF);


const day15TempF = 65
const day15TempC = (day15TempF - 32) * 5 /9;

console.log(day15TempC);

const day16TempC = 22
const day16TempF = (day16TempC * 9 / 5) + 32

console.log(day16TempF);


const day17TempF = 77
const day17TempC = (day17TempF - 32) * 5 /9;

console.log(day17TempC);

const day18TempC = 26
const day18TempF = (day18TempC * 9 / 5) + 32

console.log(day18TempF);


const day19TempF = 78
const day19TempC = (day19TempF - 32) * 5 /9;

console.log(day19TempC);

const day20TempC = 24
const day20TempF = (day20TempC * 9 / 5) + 32

console.log(day20TempF);


const day21TempF = 73
const day21TempC = (day21TempF - 32) * 5 /9;

console.log(day21TempC);

const day22TempC = 21
const day22TempF = (day22TempC * 9 / 5) + 32

console.log(day22TempF);


const day23TempF = 79
const day23TempC = (day23TempF - 32) * 5 /9;

console.log(day23TempC);

const day24TempC = 27
const day24TempF = (day24TempC * 9 / 5) + 32

console.log(day24TempF);


const day25TempF = 71
const day25TempC = (day25TempF - 32) * 5 /9;

console.log(day25TempC);

const day26TempC = 19
const day26TempF = (day26TempC * 9 / 5) + 32

console.log(day26TempF);


const day27TempF = 74
const day27TempC = (day27TempF - 32) * 5 /9;

console.log(day27TempC);

const day28TempC = 17
const day28TempF = (day28TempC * 9 / 5) + 32

console.log(day28TempF);


const day29TempF = 76
const day29TempC = (day29TempF - 32) * 5 /9;

console.log(day29TempC);

const day30TempC = 29
const day30TempF = (day30TempC * 9 / 5) + 32

console.log(day30TempF);

const temperatureF = [
    32, (25 * 9 / 5) + 32, 70, (18 * 9 / 5) + 32, 80, (15 * 9 / 5) + 32, 72, 
    (28 * 9 / 5) + 32, 68, (20 * 9 / 5) + 32, 75, (23 * 9 / 5) + 32, 82, 
    (30 * 9 / 5) + 32, 65, (22 * 9 / 5) + 32, 77, (26 * 9 / 5) + 32, 78, 
    (24 * 9 / 5) + 32, 73, (21 * 9 / 5) + 32, 79, (27 * 9 / 5) + 32, 71, 
    (19 * 9 / 5) + 32, 74, (17 * 9 / 5) + 32, 76, (29 * 9 / 5) + 32
];

const tot_temperature_in_fahrenheit = temperatureF.reduce((sum,temp) => sum + temp, 0);
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30; 

console.log ("Average Temperature In Fahrenheit:",avg_temperature_in_fahrenheit);
console.log ("TotaL Temperature in Fahrenheit:", tot_temperature_in_fahrenheit)

module.exports = {
    tot_temperature_in_fahrenheit
};


const temperatureC = [
    (32-32)*5/9, 25, (70 - 32) * 5 / 9, 18, (80 - 32) * 5 / 9, 15, (72 - 32) * 5 / 9, 28, (68 - 32) * 5 / 9, 
    20, (75 - 32) * 5 / 9, 23,  (82 - 32) * 5 / 9, 30,  (65 - 32) * 5 / 9, 22, (77 - 32) * 5 / 9, 
    26, (78 - 32) * 5 / 9, 24,  (73 - 32) * 5 / 9, 21,  (79 - 32) * 5 / 9, 27, (71 - 32) * 5 / 9,
    19, (74 - 32) * 5 / 9, 17,  (76 - 32) * 5 / 9, 29
]; 
const tot_temperature_in_celsius = temperatureC.reduce((total,temp) => total + temp,0);
const avg_temperature_in_celsius = tot_temperature_in_celsius/ 30; 

console.log ("Average Temperature In Celcius:",avg_temperature_in_fahrenheit);
console.log("ToTal Temperature in Celcius:", tot_temperature_in_celsius);


module.exports = {
    tot_temperature_in_celsius
};
