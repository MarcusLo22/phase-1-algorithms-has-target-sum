function hasTargetSum(array, target) {
  const seenElements = {};
  for (let i = 0; i < array.length; i++) {
    const difference = target - array[i];
    if (seenElements[difference]) {
      return true;
    }
    seenElements[array[i]] = true;
  }
  return false;
}

/*
  Pseudocode:
  - Create an empty object to store the elements we have seen so far.
  - Iterate over each element in the input array.
  - For each element, calculate the difference between the target number and the current element.
  - If the difference exists in the object, return true (we have found a pair).
  - If the difference does not exist in the object, add the current element to the object.
  - If we reach the end of the iteration without finding a pair, return false.

  Written Explanation:
  - We iterate over the array and calculate the difference between the target number and the current element.
  - If the difference exists in the object, it means we have already seen a number that, when added to the current element, gives us the target number.
  - If we reach the end of the iteration without finding a pair, it means no pair of numbers in the array adds up to the target number.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;