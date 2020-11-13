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
  return scanRes.map(dir => {
    let dirname = dir[0];
    return {
      title: dirname,
      collapsable: false,
      children: dir[1].map((value, index) => {
        if (value === 'README' || value === 'index') {
          return `/${dirname}/`;
        }
        return `/${dirname}/${value}`;
      }),
    };
  });
};
