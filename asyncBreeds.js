const fs = require('fs');
log = console.log

const breedDetailsFromFile = function(breed, callback) {
  log('breedDetailsFromFile: Calling readfile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

      log("In readFile's Callback: it has data.");
      if(!error) callback(data);
  });
};

const printOutCatBreed = breed => {
  log(`Return Value: `, breed)
};
// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed);