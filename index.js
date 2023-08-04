function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }

function introduction(name) {
  return `Hi, my name is ${name}.`;
}

console.log(introduction("Aki"));

function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage("User", "JavaScript"));
console.log(introductionWithLanguage("Aki", "Ember.js"));

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional("Gracie", ""));

// function sayHelloTo(firstName = "User") {
//   console.log(`Hello, ${firstName}!`);
// }

// if (condition) {
//   // Block of code
// }
    // let response;
    // switch (string) {
    //     case string.toLowerCase():
    //         response = "I can't hear you!"
    //         break;
    //     case string.toUpperCase():
    //         response = "YES INDEED!";
    //         break;
    //     case "Let's have dinner together!":
    //         response = "I would love to!";
    //         break;
    //     default:
    //        response = "";
    // }
    // return response;
