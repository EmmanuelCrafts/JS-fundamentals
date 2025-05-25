
const firstArg = process.argv[2];
const num = parseInt(firstArg, 10);

// Check if num is a valid number and the conversion matches the original argument
if (!isNaN(num) && num.toString() === firstArg) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
