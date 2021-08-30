import ApiService from '@/Api/ApiService'

const resource = '/auth'
class AuthRepository {
  async signIn () {
    const targetPath = resource + '/guest/sign_in?guest_user_id=72'
    let response = await ApiService.post(targetPath)
    if (response.data.data) {
      response.data = response.data.data
    }
    if (response.status === 201) {
      return {
        accessToken: response.data['confirm_infomation']['access-token'],
        client: response.data['confirm_infomation']['client'],
        uid: response.data['confirm_infomation']['uid'],
        autoLoginToken: response.data['auto_login_token']
      }
    } else {
      return null
    }
  }
}

export {AuthRepository}
