import { createStore } from "vuex";
import getJobs from "@/api/getJobs";
export const LOGIN_USER = "LOGIN_USER";
export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const FETCH_JOBS = "FETCH_JOBS";

export const state = () => {
  return {
    isLogged: false,
    jobs: [],
  };
};

export const mutations = {
  [LOGIN_USER](state) {
    state.isLogged = true;
  },
  [RECEIVE_JOBS]: (state, jobs) => {
    state.jobs = jobs;
  },
};

export const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings);
  },
};

export default createStore({
  state,
  // mutation 只能進行同步操作
  mutations,
  actions,
  // 嚴格限制只能在 mutation 中可以修改 state
  // 因佔據記憶體會變慢 app 速度，所以只在 dev 模式運行
  strict: process.env.NODE_ENV !== "production",
});
