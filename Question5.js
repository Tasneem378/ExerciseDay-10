//Question5_Create a set of 5 string elements from array.

const array = ['Pakistan','India','Itly','China','England','Uk','USA'];
const setFromArray = new Set(array);

let setOfStrings = new Set();
for (const item of setFromArray) {
  if (typeof item === "string") {
    setOfStrings.add(item);
    if (setOfStrings.size === 5) {
      break;
    }
  }
}

const arrayOfStrings = Array.from(setOfStrings);

console.log(arrayOfStrings);



