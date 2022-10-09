import newRequest from '@/utils/newRequest';
export function getBlogClassify() {
  return newRequest({
    url: '/blog/getBlogClassify',
    method: 'get'
  });
}
export function setBlogClassify(data) {
  return newRequest({
    url: '/blog/setBlogClassify',
    method: 'post',
    data
  });
}

export function addBlogClassify(data) {
  return newRequest({
    url: '/blog/addBlogClassify',
    method: 'post',
    data
  });
}
export function deleteBlogClassify(params) {
  return newRequest({
    url: '/blog/deleteBlogClassify',
    method: 'get',
    params
  });
}
