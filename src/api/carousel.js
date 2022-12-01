import request from '@/utils/request.js';
export function getCarousel() {
  return request({
    url: '/carousel/getAll',
    method: 'get'
  });
}
export function setCarousel(data) {
  return request({
    url: '/carousel/set',
    method: 'post',
    data
  });
}

export function addCarousel(data) {
  return request({
    url: '/carousel/add',
    method: 'post',
    data
  });
}
export function deleteCarousel(params) {
  return request({
    url: '/carousel/delete',
    method: 'get',
    params
  });
}
