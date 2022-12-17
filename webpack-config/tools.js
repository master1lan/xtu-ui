const fs = require('fs'),
    path = require('path');
/**
 * 需要实现这样的功能：
 * 找出在components下面的各文件夹
 * 然后得到ts、js、less、css等结尾的文件。
 */
const match_list = [`.ts`, `.js`, `.less`, `.css`];
function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(function (
        dirent
    ) {
        const filePath = path.join(currentDirPath, dirent.name);
        if (dirent.isDirectory()) {
            const list = [];
            fs.readdirSync(filePath, { withFileTypes: true }).forEach(
                (file) => {
                    if (
                        file.isFile() &&
                        match_list.some((item) => file.name.endsWith(item))
                    ) {
                        list.push(file.name);
                    }
                }
            );
            callback(dirent.name, filePath, list);
        }
    });
}
const webpack_entry_object = {};
function walk_into_object(file_name, filePath, list) {
    webpack_entry_object[file_name] = list.map((item) =>
        path.resolve(filePath, item)
    );
}
// walkSync(path.resolve(__dirname, '../src/components'), walk_into_object);
// walkSync(path.resolve(__dirname, '../src/utils'), walk_into_object);
function resolve_webpack_entry(pathArr = [], isOneFile = false) {
    let _pathArr = pathArr,
        res;
    if (!pathArr instanceof Array) {
        _pathArr = [pathArr];
    }
    _pathArr.map((value) =>
        walkSync(path.resolve(__dirname, value), walk_into_object)
    );
    if (!isOneFile) {
        res = {
            ...webpack_entry_object,
        };
    } else {
        res = Object.values(webpack_entry_object).flat();
    }
    return res;
}
module.exports = resolve_webpack_entry;
