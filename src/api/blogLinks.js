import request from '@/utils/request.js';
export function getBlogLinks() {
  return request({
    url: '/blogLinks/getAll',
    method: 'get'
  });
}
export function setBlogLinks(data) {
  return request({
    url: '/blogLinks/set',
    method: 'post',
    data
  });
}

export function addBlogLinks(data) {
  return request({
    url: '/blogLinks/add',
    method: 'post',
    data
  });
}
export function deleteBlogLinks(params) {
  return request({
    url: '/blogLinks/delete',
    method: 'get',
    params
  });
}
