import request from '@/utils/request.js';
export function loginApi(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  });
}

export function getInfoApi() {
  return request({
    url: '/user/getInfo',
    method: 'get'
  });
}

export function setInfoApi(data) {
  return request({
    url: '/user/setInfo',
    method: 'post',
    data
  });
}
export function updatePasswordApi(data) {
  return request({
    url: '/user/updatePassword',
    method: 'post',
    data
  });
}
