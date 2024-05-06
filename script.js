/**
 * Message Generator
 * 
 * Mechanism to choose option:
 * Cars and uniqueness would be based on choice.
 * Verb, join, reason are random.
 * 
 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = {
  verbs: ['Buy', 'Own'],
  cars: ['Mercedes', 'BMW', 'Lamborghini', 'Peugeot'],
  joins: ['it has', 'of its'],
  uniqueness: ['harmony and timeless elegance', 'dynamic, sporty, and performance', 'power and luxury', 'distinctive and modern'],
  reason: ['suits you well', 'as you are']
};

// Method to choose car
console.log("Let me guess your dream car.");

readline.question("Choose shirt style that you like? (1 - formal / 2 - denim / 3 - polo / 4 - flannel): ", prompt1 => {
  if (prompt1 < 1 || prompt1 > 4) {
    console.log('Invalid input. Input must be between 1 and 4');
    readline.close();
    return;
  }

  readline.question("Your working environment? (1 - office / 2 - site): ", prompt2 => {
    if (prompt2 < 1 || prompt2 > 2) {
      console.log('Invalid input. Input must be between 1 and 2');
      readline.close();
      return;
    }

    const carsAndUniqueComponent = ((prompt1 - 1) + (prompt2 - 1)) % 2;

    // Method to choose verb and reason
    const verbIdx = Math.floor(Math.random() * data.verbs.length);
    const verb = data.verbs[verbIdx];

    const carIdx = carsAndUniqueComponent;
    const car = data.cars[carIdx];

    const joinIdx = Math.floor(Math.random() * data.joins.length);
    const join = data.joins[joinIdx];

    const uniquenessIdx = carsAndUniqueComponent;
    const uniqueness = data.uniqueness[uniquenessIdx];

    const reasonIdx = Math.floor(Math.random() * data.reason.length);
    const reason = data.reason[reasonIdx];

    // Output
    console.log(`${verb} ${car} car. Because ${join} ${uniqueness} design, ${reason}.`);
    readline.close();
  });
});
