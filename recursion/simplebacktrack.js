const exploreCombinations = (basket, combination = [], result = []) => {
    // If the basket is empty, add the current combination to the result
    if (basket.length === 0) {
        debugger
        result.push([...combination]);
        return;
    }

    debugger
    // Explore picking each fruit from the basket
    for (let i = 0; i < basket.length; i++) {
        // Pick the current fruit
        combination.push(basket[i]);

        debugger
        // Explore further combinations starting from the next fruit
        exploreCombinations(basket.slice(i + 1), combination, result);

        // Backtrack: Remove the last picked fruit to try the next one
        combination.pop();
    }
};

// Define the fruits in the basket
const basket = ['apple', 'banana', 'orange'];

// Initialize an empty array to store all combinations
const allCombinations = [];

// Explore all possible combinations of fruits
exploreCombinations(basket, [], allCombinations);

// Output all combinations of fruits
console.log('All combinations:', allCombinations);
