import { loginApi, getInfoApi, setInfoApi } from '@/api/user';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { resetRouter } from '@/router';

const getDefaultState = () => {
  return {
    token: getToken(),
    userInfo: {}
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USERINFO: (state, username) => {
    state.userInfo = username;
  }
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      loginApi({ username: username.trim(), password: password }).then(response => {
        const { result } = response;
        commit('SET_TOKEN', result);
        setToken(result);
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfoApi().then(response => {
        const { result } = response;
        if (!result) {
          return reject('验证失败，请重新登录');
        }

        commit('SET_USERINFO', result);
        resolve(result);
      }).catch(error => {
        reject(error);
      });
    });
  },

  setInfo({ dispatch, commit }, data) {
    return new Promise((resolve, reject) => {
      setInfoApi(data).then(response => {
        dispatch('getInfo');
        const { result } = response;
        resolve(result);
      }).catch(error => {
        reject(error);
      });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken(); // must remove  token  first
      resetRouter();
      commit('RESET_STATE');
      resolve();
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken(); // must remove  token  first
      commit('RESET_STATE');
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

