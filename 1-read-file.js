const fs = require("fs");

console.log(1);

// Callback function is just a function that you pass in to another function for that to call it. The other function is calling the function that you pass in as an argument.
fs.readFile('./hello-world.txt', "utf8", (error, data) => {
    console.log(data);
});

fs.readFile('./file-does-not-exiist.txt', "utf8", (error, data) => {
    if (error) {
        console.error(error);
    }
});

console.log(2);

// 37:00: Node is used for building APIs as well as building command line tools.