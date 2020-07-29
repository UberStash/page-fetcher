const input = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

let download;

request(`${input[0]}`, (error, response, body) => {
  if (error) {
    console.log('You entered the url wrong the complete error message is:', error);
    return;
  } else {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    download = body;
 
    fs.access(`${input[1]}`, function(error) {
    
      if (error && !input[2]) {
        console.log("Directory does not exist.", error);
      } else {
        fs.writeFile(`${input[1]}`, download, function(err) {
          if (err) return console.log(err);
        
        });
      }
    });
  }
});
  
// request the website
// store requested data in variable
// use fp system to write variable data to file system