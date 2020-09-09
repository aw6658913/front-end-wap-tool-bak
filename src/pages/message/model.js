import { userInfo } from "./service";

export default {
  namespace: "message",
  state: {},
  effects: {
    *info({ payload = {} }, { call }) {
      const { data } = yield call(userInfo, payload);
      return data;
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};
