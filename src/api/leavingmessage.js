import request from '@/utils/request.js';
export function getLeavingMessageUser() {
  return request({
    url: '/leavingmessage/getLeavingMessageUser',
    method: 'get'
  });
}
export function deleteLeavingMessageUser(data) {
  return request({
    url: '/leavingmessage/deleteLeavingMessageUser',
    method: 'post',
    data
  });
}
export function deleteLeavingMessage(data) {
  return request({
    url: '/leavingmessage/deleteLeavingMessage',
    method: 'post',
    data
  });
}
export function getLeavingMessage(params) {
  return request({
    url: '/leavingmessage/getLeavingMessage',
    method: 'get',
    params
  });
}
