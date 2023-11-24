// basic example for exceptions hanling in js 
try {
    // Code that may throw an exception
    throw new Error("This is an example error.");
} catch (error) {
    // Handle the exception
    console.error("Caught an error:", error.message);
} finally {
    // Optional: Code that always executes, regardless of whether an exception occurred or not
    console.log("This will always be executed.");
}

// Example for zero division error :
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

try {
    console.log(divide(10, 2)); // Output: 5
    console.log(divide(10, 0)); // Throws an error
} catch (error) {
    console.error("Caught an error:", error.message);
}
