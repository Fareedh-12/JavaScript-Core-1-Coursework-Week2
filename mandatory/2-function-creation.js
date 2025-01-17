/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  mod = num%2;
  numType = typeof(num);
  if (mod === 0 && num<=100 && numType!== "string"){
    return true;
  }else{
    return false;
  }
}


/*
Write a function that:
- takes a number as input
- return a string formatted as percentages (e.g. 10 => "10%")
- the number must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(num) {
  return num>100? 100+"%" : Math.round(num*100)/100+"%";
}


// /*
// Write a function that:
// - takes an array of strings as input
// - removes any spaces in the beginning or end of each string
// - removes any forward slashes (/) in each string
// - makes all strings all lowercase
// */

//working function 1
// function tidyUpStrings(arrayOfStrings) {
//   var newArray = [];
//   for (var i =0; i< arrayOfStrings.length; i++){
//     newArray.push(arrayOfStrings[i].toLowerCase().trim().replace(/\//g, ''));
//   }
//   return newArray;
// }

//attempt 2
function tidyUpStrings(arrayOfStrings) {
  var newArray = arrayOfStrings.map(name => name.toLowerCase().trim().replace(/\//g, ''))
  return newArray;
}


// /* ======= TESTS - DO NOT MODIFY ===== */

test("validate function accepts valid even number", () => {
  expect(validate(10)).toEqual(true);
});

test("validate function accepts other valid even number", () => {
  expect(validate(18)).toEqual(true);
});

test("validate function accepts exactly 100", () => {
  expect(validate(100)).toEqual(true);
});

test("validate function rejects odd number", () => {
  expect(validate(17)).toEqual(false);
});

test("validate function rejects string", () => {
  expect(validate("Ten")).toEqual(false);
});

test("validate function rejects stringified number", () => {
  expect(validate("10")).toEqual(false);
});

test("validate function rejects too large number", () => {
  expect(validate(108)).toEqual(false);
});

test.each([
  [23, "23%"],
  [18.103, "18.1%"],
  [187.2, "100%"],
  [0.372, "0.37%"],
])("formatPercentage function works for %s", (input, expected) => {
  expect(formatPercentage(input)).toEqual(expected);
});

test("tidyUpString function works", () => {
  expect(
    tidyUpStrings([
      "/Daniel",
      " /Sanyia",
      "AnTHonY",
      "irina",
      " Gordon",
      "ashleigh   ",
      "   Alastair  ",
      " anne marie  ",
    ])  
  ).toEqual([
    "daniel",
    "sanyia",
    "anthony",
    "irina",
    "gordon",
    "ashleigh",
    "alastair",
    "anne marie",
  ]); 
});
