// let start = /^[0-9]+\./;

// function resetname(name) {
//   if (start.test(name)) {
//     return name.substring(name.indexOf('.') + 1);
//   }
//   return name;
// }
/**
 * 将扫描出来的文件数据格式化为侧边栏配置数据
 * @param {Array} scanRes
 */
module.exports = function(scanRes) {
  //   console.log(scanRes);
  return scanRes
    .map(dir => {
      let dirname = dir[0];
      // 根据目录区分主标题
      // return {
      //   title: dirname,
      //   collapsable: false,
      //   children: dir[1].map((value, index) => {
      //     if (value === 'README' || value === 'index') {
      //       return `/${dirname}/`;
      //     }
      //     return `/${dirname}/${value}`;
      //   }),
      // };

      // 临时方案，将目录的主标题去除，包括后面的reduce
      return dir[1].map((value, index) => {
        // if (value === 'README' || value === 'index') {
        //   return `/${dirname}/`;
        // }
        return `/${dirname}/${value}`;
      });
    })
    .reduce((pre, cur) => pre.concat(cur), []);
};
