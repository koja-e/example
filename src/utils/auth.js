import Cookies from 'js-cookie'

const AccessToken = 'accessToken'
const Client = 'client'
const Uid = 'uid'
const AutoLoginToken = 'autoLoginToken'

export function setHeader ({accessToken, client, uid, autoLoginToken, time = 365}) {
  Cookies.set(AccessToken, accessToken, {expires: time})
  Cookies.set(Client, client, {expires: time})
  Cookies.set(Uid, uid, {expires: time})
  Cookies.set(AutoLoginToken, autoLoginToken, {expires: time})
}
