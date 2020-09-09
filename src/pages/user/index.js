import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import "./index.scss";

@connect(({ message, common }) => ({ ...message, ...common }))
class User extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentDidMount = () => {};

  render() {
    return <View className='home-page'>我的</View>;
  }
}

export default User;
