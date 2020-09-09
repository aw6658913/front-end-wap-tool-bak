import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import "./index.scss";

@connect(({ home, common }) => ({ ...home, ...common }))
class Home extends Component {
  config = {
    navigationBarTitleText: "首页",
  };

  componentDidMount = () => {};

  render() {
    return <View className='home-page'>首页</View>;
  }
}

export default Home;
