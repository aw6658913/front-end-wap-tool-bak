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

// 接口请求模板

const serviceTep = `
import { Request } from "../../http";

export const userInfo = (data) => {

};

export default { userInfo }`;

// model 模板

const modelTep = `
import { userInfo } from "./service";

export default {
  namespace: '${dirName}',
  state: {},
  effects: {
    *info({ payload = {} }, { call }) {
      const { data } = yield call(userInfo, payload);
      return data;
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};`;


fs.mkdirSync(`./src/pages/${dirName}`); // mkdir $1
process.chdir(`./src/pages/${dirName}`); // cd $1

fs.writeFileSync("index.js", indexTep); //tsx
fs.writeFileSync("index.scss", scssTep); // scss
fs.writeFileSync("service.ts", serviceTep); // service
fs.writeFileSync("model.ts", modelTep); // model
process.exit(0);
