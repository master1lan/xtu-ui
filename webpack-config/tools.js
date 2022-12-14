const fs = require('fs'),
    path = require('path');

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(function (
        dirent
    ) {
        const filePath = path.join(currentDirPath, dirent.name);
        if (dirent.isDirectory()) {
            callback(dirent.name, filePath);
        }
    });
}

const webpack_entry_object = {};
walkSync(
    path.resolve(__dirname, '../components'),
    function (file_name, filePath) {
        webpack_entry_object[file_name] = path.resolve(filePath, 'index.ts');
    }
);
module.exports = webpack_entry_object;
