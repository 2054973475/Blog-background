import newRequest from '@/utils/newRequest';
export function getBlogClassify() {
  return newRequest({
    url: '/blogClassify/getAll',
    method: 'get'
  });
}
export function setBlogClassify(data) {
  return newRequest({
    url: '/blogClassify/set',
    method: 'post',
    data
  });
}

export function addBlogClassify(data) {
  return newRequest({
    url: '/blogClassify/add',
    method: 'post',
    data
  });
}
export function deleteBlogClassify(params) {
  return newRequest({
    url: '/blogClassify/delete',
    method: 'get',
    params
  });
}
