import {AuthRepository} from '@/Api/Repository/AuthRepository'

const auth = {
  state: {
    accessToken: null,
    client: null,
    uid: null,
    autoLoginToken: null
  },
  mutations: {
    SET_HEADER (state, {accessToken, client, uid, autoLoginToken}) {
      state.accessToken = accessToken
      state.client = client
      state.uid = uid
      state.autoLoginToken = autoLoginToken
    }
  },
  actions: {
    /**
     * サインイン
     */
    async signIn ({dispatch}) {
      const authRepository = new AuthRepository()
      const auth = await authRepository.signIn()
      if (auth) {
        const headerParam = {
          accessToken: auth.accessToken,
          client: auth.client,
          uid: auth.uid,
          autoLoginToken: auth.autoLoginToken
        }
        dispatch('setAuthHeader', headerParam)
        return auth
      } else {
        return null
      }
    },
    /**
     * Authのヘッダー情報をstoreに保管するアクション
     * @param state
     * @param headers
     **/
    setAuthHeader ({commit}, {accessToken, client, uid, autoLoginToken}) {
      commit('SET_HEADER', {accessToken, client, uid, autoLoginToken})
    }
  },
  getters: {
    /**
     * axios用のAPI認証ヘッダーを取得
     */
    headerConfig (state) {
      return {
        headers: {
          'access-token': state.accessToken,
          client: state.client,
          uid: state.uid,
          'auto-login-token': state.autoLoginToken
        }
      }
    }
  }
}
export default auth
