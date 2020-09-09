import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import "./index.scss";

@connect(({ message, common }) => ({ ...message, ...common }))
class Message extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentDidMount = () => {};

  render() {
    return <View className='home-page'>消息</View>;
  }
}

export default Message;
