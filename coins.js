// created a var to capture the click event
var button = document.getElementById("money");

// created a var to grab the user input from the field
var input = document.getElementById("input");

// this function tests that the user put in a 4 digit dollar amount with 2 decimal places
function check(elem) {
  if(!elem.value.match(/^\d?\d\.\d\d$/)) {
    alert('Error in data – use the format dd.dd (d = digit)');
  }
}

// this line captures the button and tells it to run the following function
button.addEventListener("click", determineCoins);

// this function grabs the input and divides it evenly amongst the coin values and logs the totals to the console - have to *100 to get to a whole number so the remainders don't throw off the values
function determineCoins () {
  var toCents = input.value * 100;
  var totalQuarters = Math.floor(parseFloat(toCents) / 25);
  var totalDimes = Math.floor(parseFloat((toCents) % 25) / 10);
  var totalNickels = Math.floor(parseFloat(((toCents) % 25) % 10) / 05);
  var totalPennies = Math.floor(parseFloat((((toCents) % 25) % 10) % 05) / 01);
  console.log(input.value +  " = " + totalQuarters + " Quarters, " + totalDimes + " Dimes, " + totalNickels + " Nickels, " + totalPennies + " Pennies.");
}
