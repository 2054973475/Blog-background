import request from '@/utils/request.js';
export function getBlogArticleAll() {
  return request({
    url: '/blogArticle/getAll',
    method: 'get'
  });
}
export function getBlogArticle(params) {
  return request({
    url: '/blogArticle/get',
    method: 'get',
    params
  });
}
export function setBlogArticle(data) {
  return request({
    url: '/blogArticle/set',
    method: 'post',
    data
  });
}

export function addBlogArticle(data) {
  return request({
    url: '/blogArticle/add',
    method: 'post',
    data
  });
}
export function deleteBlogArticle(params) {
  return request({
    url: '/blogArticle/delete',
    method: 'get',
    params
  });
}
