import newRequest from '@/utils/newRequest';
export function loginApi(data) {
  return newRequest({
    url: '/user/login',
    method: 'post',
    data
  });
}

export function getInfoApi() {
  return newRequest({
    url: '/user/getInfo',
    method: 'get'
  });
}

export function setInfoApi(data) {
  return newRequest({
    url: '/user/setInfo',
    method: 'post',
    data
  });
}
