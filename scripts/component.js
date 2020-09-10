
/**
 *  pages 页面快速生成脚本
 *
 *  npm run tem '文件名‘
 */
// eslint-disable-next-line import/no-commonjs
const fs = require("fs");

const dirName = process.argv[2];
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);

if (!dirName) {
    console.log("文件名不能为空");
    console.log("用法：npm run tem test");
    process.exit(0);
}

// 页面模板构建

const indexTep = `
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import './index.scss';

@connect(({ ${dirName}, common }) => ({ ...${dirName}, ...common }))

class ${capPirName} extends Component{
    config = {
      navigationBarTitleText: '页面标题'
    };

    componentWillMount () { };

    componentDidMount () { };

    componentWillUnmount () { };

    componentDidShow () { };

    componentDidHide () { };

    render() {
        return (
            <View className='common-page'>
                页面内容
            </View>
        )
    }
}
export default ${capPirName}
`;

// scss 文件模板

const scssTep = ``;

fs.mkdirSync(`./src/components/${dirName}`); // mkdir $1
process.chdir(`./src/components/${dirName}`); // cd $1

fs.writeFileSync("index.js", indexTep); //tsx
fs.writeFileSync("index.scss", scssTep); // scss
process.exit(0);
