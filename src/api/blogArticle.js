import newRequest from '@/utils/newRequest';
export function getBlogArticleAll() {
  return newRequest({
    url: '/blogArticle/getAll',
    method: 'get'
  });
}
export function getBlogArticle(params) {
  return newRequest({
    url: '/blogArticle/get',
    method: 'get',
    params
  });
}
export function setBlogArticle(data) {
  return newRequest({
    url: '/blogArticle/set',
    method: 'post',
    data
  });
}

export function addBlogArticle(data) {
  return newRequest({
    url: '/blogArticle/add',
    method: 'post',
    data
  });
}
export function deleteBlogArticle(params) {
  return newRequest({
    url: '/blogArticle/delete',
    method: 'get',
    params
  });
}
