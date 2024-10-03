// user input prompt
const userInputString = prompt(
  "Please enter some ice cream flavors separated by commas.",
  "vanilla,chocolate,cookie-dough"
);
console.log(userInputString);
const stringArray = userInputString.split(",");
// console.log(`You gave these flavors ${getFlavors(userInputString)}`);

// function getFlavors(userInputString) {
//   return userInputString;
// }

const froyoFlavors = {};
for (let i = 0; i < stringArray.length; i++) {
  console.log(stringArray[i]);
  froyoFlavors[stringArray[i]] = stringArray[i];
}
let input = stringArray;

let count = {};
for (const element of stringArray) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
console.log(count);

// const arr = [vanilla,vanilla,vanilla,strawberry,coffee,coffee]

// const froyo = {
//      vanilla: 3,
//      strawberry: 1,
//      coffee: 2,
// };
// console.log(`You have ordered ${froyo.vanilla} vanilla, ${froyo.strawberry} strawberry,
//     and ${froyo.coffee} coffee froyo(s)`)
