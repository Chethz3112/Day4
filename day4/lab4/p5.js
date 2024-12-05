/*Question 1: Write a JavaScript function atmwithdrawal (balance, amount) that:
Checks if the requested amount is in multiples of 10.
Checks if the amount is less than or equal to $500.
Checks if the balance is enough for the requested withdrawal.
Returns a success message if the withdrawal is allowed, or an error message if any condition fails.
Print Numbers in a Range with Conditions
Write a Javascript program that prints numbers from 1 to 100, but with the following rules:
For multiples of 3, print "Fizz" instead of the number.
For multiples of 9, print "Buzz" instead of the number.
For numbers that are multiples of both 3 and 5, print "FizzBuzz"*/


function atmwithdrawal(balance, amount) {
    
    if (amount % 10 !== 0) {
        return "Error: Amount must be a multiple of 10.";
    }
    if (amount > 500) {
        return "Error: Amount must be less than or equal to $500.";
    }
    if (balance < amount) {
        return "Error: Insufficient balance.";
    }
    return `Success: You have successfully withdrawn $${amount}. Your new balance is $${balance - amount}.`;
}
console.log(atmwithdrawal(1000, 100));  
console.log(atmwithdrawal(1000, 45));   
console.log(atmwithdrawal(1000, 600));  
console.log(atmwithdrawal(200, 50));    
