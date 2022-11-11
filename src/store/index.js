import { createStore } from "vuex";

export const state = () => {
  return {
    isLogged: false,
  };
};

export const mutations = {
  LOGIN_USER(state) {
    state.isLogged = true;
  },
};

export default createStore({
  state,
  // mutation 只能進行同步操作
  mutations,
  // 嚴格限制只能在 mutation 中可以修改 state
  // 因佔據記憶體會變慢 app 速度，所以只在 dev 模式運行
  strict: process.env.NODE_ENV !== "production",
});
