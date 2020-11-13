const fs = require('fs');
const path = require('path');

let excludeDir = ['.vuepress'];

let basePath = path.resolve(process.cwd(), './docs');

let fileTypes = /\.md$/; //只匹配以md结尾的文件

/**
 * 扫描所有文件，根据文件夹文件名，组成对应数组
 */
module.exports = function scanMd() {
  let res = [];

  let dirs = fs.readdirSync(basePath);

  //遍历读取到的目录
  for (let i = 0; i < dirs.length; i++) {
    if (excludeDir.indexOf(dirs[i]) < 0) {
      let dir = dirs[i];
      let allFiles = fs.readdirSync(path.resolve(basePath, dir));

      // 目录与目录中的md文件对应 [dir,[file1,file2...]]
      let dirRes = [
        dir,
        allFiles
          .filter((value, index) => {
            let filePath = path.resolve(basePath, dir, value);
            let fileInfo = fs.statSync(filePath);
            return fileTypes.test(value) && fileInfo.isFile();
          })
          .map(value => {
            return value.substring(0, value.indexOf('.md'));
          })
          .sort((a, b) => {
            if (a === 'README' || a === 'index') {
              return -1;
            }
            return 0;
          }),
      ];

      res.push(dirRes);
    }
  }
  return res;
};
