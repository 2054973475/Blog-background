import request from '@/utils/request.js';
export function getBlogClassify() {
  return request({
    url: '/blogClassify/getAll',
    method: 'get'
  });
}
export function setBlogClassify(data) {
  return request({
    url: '/blogClassify/set',
    method: 'post',
    data
  });
}

export function addBlogClassify(data) {
  return request({
    url: '/blogClassify/add',
    method: 'post',
    data
  });
}
export function deleteBlogClassify(params) {
  return request({
    url: '/blogClassify/delete',
    method: 'get',
    params
  });
}
