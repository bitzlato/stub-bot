const fs = require('fs');
const path = require('path');

const readFileSync = (filePath, ext = '.md') => {
    return fs.readFileSync(path.join(path.resolve(), '/templates', filePath + ext), 'utf8')
}

module.exports = { readFileSync }
