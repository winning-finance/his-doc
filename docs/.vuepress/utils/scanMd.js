const fs = require('fs');
const path = require('path');

const dirSortConf = require('../dirSortConf.json');

let excludeDir = ['.vuepress', 'guide'];

let basePath = path.resolve(process.cwd(), './docs');

let fileTypes = /\.md$/; //只匹配以md结尾的文件

/**
 * 扫描所有文件，根据文件夹文件名，组成对应数组
 */
module.exports = function scanMd() {
  let res = [];

  let dirs = fs
    .readdirSync(basePath)
    .filter(value => value !== 'index.md' && value !== 'README.md');

  // 根据给出的目录顺序进行排序
  dirs.sort((a, b) => {
    if (dirSortConf.indexOf(a) >= 0) {
      if (dirSortConf.indexOf(b) >= 0) {
        // 如果a，b在规则上，则直接a，b相比较
        return dirSortConf.indexOf(a) - dirSortConf.indexOf(b);
      }
      // 只有a在的话，默认以a优先
      return -1;
    }
    // 两者都没有被规定，则保持原样
    return 0;
  });

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
