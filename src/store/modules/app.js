
export default {
  state: {
    loginToken: JSON.parse(localStorage.getItem('xx')) || null,

  },

  getters: {
    LoginToken: state => state.loginToken,
    BetRecord:state => state.betrecord,
    BetRecordBody:state => state.body_betrecord,
    ComboData:state=> state.comboData,
    WebsocketState:state => state.websocket_state
  },

  mutations: {
    WEB_SOCKET_STATE(state,payload) {
      state.websocket_state = payload
    },
    COMBO_DATA(state,payload) {
      state.comboData = payload
    },
    LOGIN_TOKEN(state, payload) {
      state.loginToken = payload
      localStorage.setItem('xx',JSON.stringify(payload))
    },

  },

  namespaced: true
}
