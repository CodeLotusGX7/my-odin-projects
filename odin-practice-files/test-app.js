const fs = require('node:fs');

const content = 'Some Content!';

fs.writeFile('test.txt', content, err => {
    if (err) {
        console.error(err);
    } else {
        // file written successfully
    }
})