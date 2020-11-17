const fs = require('fs')
const path = require('path')
const dirSortConf = require('../dirSortConf.json')
const group2IndexMap = require('./group2index-map')
const basePath = path.resolve(process.cwd(), 'docs')
let fileTypes = /\.md$/ //只匹配以md结尾的文件

module.exports = function () {
    const dirs = fs.readdirSync(basePath).filter(value => !value.startsWith('.') && value !== 'index.md' && value !== 'README.md')
    const dd = dirs.reduce((r, dir) => {
        const fileNames = genItem(dir, basePath).children
        fileNames.unshift(['', group2IndexMap[dir]])
        r[`/${dir}/`] = fileNames
        return r
    }, {})
    require('fs-extra').outputFileSync(path.resolve(process.cwd(), 'data.js'), JSON.stringify(dd, '', 4))
    return dd
}

function genItem(file, parentRelativePath, parentPath = '/') {
    const fullPath = path.resolve(parentRelativePath, file)
    const linkPath = `${path.resolve('/', parentPath, file)}`
    const obj = {
        title: file.replace('.md', ''),
        children: [],
        sidebarDepth: 2,
    }
    if (fs.lstatSync(fullPath).isDirectory()) {
        let filesOrDirs = fs.readdirSync(fullPath).filter(value => !value.startsWith('.') && value !== 'README.md')
        obj.children = filesOrDirs.map(item => genItem(item, fullPath, linkPath))
    } else {
        obj.path = linkPath
    }

    return obj
}