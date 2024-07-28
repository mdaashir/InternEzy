function showPopup() {
	alert('To view the result, please open the browser console window.');
}
var num1 = 10;
var num2 = 20;
var num3 = 30;
var num4 = 40;
var num5 = 50;

// Array to hold the numbers
var numbers = [num1, num2, num3, num4, num5];

for (var i = 0; i < numbers.length; i++) {
	console.log('Value of num' + (i + 1) + ':', numbers[i]);
}

// Add the numbers
var sum = num1 + num2 + num3 + num4 + num5;
console.log('Sum of the numbers:', sum);

// Subtract 40 from the sum
var result = sum - 40;
console.log('Result of the subtraction:', result);

// Multiply the result by 30
var finalResult = result * 30;
console.log('Result of the multiplication:', finalResult);

// Output the final result
console.log('Final Result:', finalResult);
